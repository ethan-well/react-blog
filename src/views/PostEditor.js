import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Row, Col, Input, Icon, Card, Radio, Button} from 'antd';
const { TextArea } = Input;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import { Link, Redirect } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
const history = createHistory({basename: "/", forceRefresh: true})
import Editor from '../layouts/Editor';
import * as HttpHandler from '../conserns/HttpHandler';
import UserAvatar from '../layouts/UserAvatar';
import MyTag from './MyTag';
import PropTypes from 'prop-types';
import AlertIt from './AlertIt';

class PostEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_title: '',
      post_content: '',
      post_prev: '',
      validate: this.props.match.params.id ? true : false,
      is_edit: this.props.match.params.id ? true : false,
      article_id: this.props.match.params.id,
      show_tags_selector: false,
      tag_list: new Set(),
      category: 1,
      alert_it: false,
      alert_message: '',
      alert_type: 'warning',
      categories: [],
      length_saved: 0,
    }
  }

  subcallback = (push, name) => {
    if(push) {
      this.state.tag_list.add(name);
    } else {
      this.state.tag_list.delete(name);
    }
  }

  getChildContext() {
    return {
      callback: this.subcallback,
    };
  }

  componentWillMount() {
    if(this.state.is_edit){
      const url = `http://localhost:3000/api/articles/${this.state.article_id}`;
      HttpHandler.GetHandler(url, this.initArticle)
    }
    const url = 'http://localhost:3000/api/categories';
    HttpHandler.GetHandler(url, this.initCategories);
  }

  initArticle = (data) => {
    if(data['status'] === 1) {
      this.setState({ post_title: data['article'].title, post_content: data['article'].content, length_saved: data['length'] })
    }
  }

  initCategories = (data) => {
    if(data['status'] === 1) {
      this.setState({ categories: data.categories});
    }
  }

  componentDidMount() {
    this.refs.post_title.focus();
    let textArea = document.getElementById('post_content_textarea');
    textArea.addEventListener('keydown', (e) => {
      if([9, 13, 32].indexOf(e.keyCode) !== -1){
        let keyValue = ''
        switch (e.keyCode) {
          case 9: // tab was pressed
            keyValue = '\t';
            break;
          case 32:
            keyValue = ' '; // blank was pressed
            break;
          case 13:
            keyValue = '\r\n';
            break;
          default:
            console.log('this keydown skiped')
        }

        let start = e.target.selectionStart;
        let end = e.target.selectionEnd;
        let value = e.target.value;
        e.target.value = (value.substring(0, start) + keyValue + value.substring(start))

        e.target.selectionStart = e.target.selectionEnd = start + 1;

        e.preventDefault();
      }
    })
  }

  syncCallback = (data) => {
    if(data['status'] == 1) {
      this.setState({ sync_succeed: true, is_edit: true, article_id: data['id'], length_saved: data['length']});
    } else {
      this.setState({ sync_succeed: false});
    }
  }

  syncIt = (content) => {
    const post_title = this.state.post_title || content.substr(0, 10);
    const data = {title: post_title, content: content, category: this.state.category, tags: this.state.tag_list};
    if(this.state.is_edit){
      const url = `http://localhost:3000/api/articles/${this.state.article_id}`;
      const res = HttpHandler.PutHandler(url, data, this.syncCallback);
    } else {
      const url = 'http://localhost:3000/api/articles';
      const res = HttpHandler.postHandler(url, data, this.syncCallback);
    }
  }

  changePostContent = (event) => {
    const content = event.target.value;
    const change_char_len = Math.abs(content.length - this.state.length_saved)
    this.setState({post_content: content});
    if(content.length >= 1){
      this.setState({validate: true});
      if(change_char_len >= 10) {
        this.syncIt(content);
      }
    } else {
      this.setState({validate: false});
    }
  }

  changePostTitle = (event) => {
    this.setState({post_title: event.target.value});
  }

  goBackLink = () =>{
    return(this.state.is_edit ? <Link to={`/post_show/${this.state.article_id}`} > 返回 </Link> : '')
  }

  stopPropagation = (e) => {
    e.stopPropagation();
  }

  categoryHandleChange = (e) => {
    this.setState({category: e.target.value});
  }

  publishHandle = (e) => {
    if(!this.state.validate){
      this.setState({
        alert_it: true,
        alert_message: '文章内容不能为空',
        alert_type: 'warning',
      });
    } else {
      const data = {title: this.state.post_title, content: this.state.post_content, category: this.state.category, tags: this.state.tag_list};

      if(this.state.is_edit){
        const url = `http://localhost:3000/api/articles/${this.state.article_id}`;
        const res = HttpHandler.PutHandler(url, data, this.callback);
      } else {
        const url = 'http://localhost:3000/api/articles';
        const res = HttpHandler.postHandler(url, data, this.callback);
      }
    }
    this.setState({show_tags_selector: false});
  }

  callback = (data) => {
    if(data['status'] === 1) {
      history.push(`/post_show/${data['id']}`);
    } else {
      this.setState({
        alert_it: true,
        alert_message: data['msg'],
        alert_type: 'error',
      })
    }
  }

  handleClose = () => {
    this.setState({alert_it: false});
  }

  postTagsSelector = () => {
    return(
      <Card title="发布文章" onClick={this.stopPropagation}
        style={ {display: this.state.show_tags_selector ? '' : 'none'} }
        className="post-tags-selector"
        actions={[<Button type="primary" onClick={this.publishHandle} ghost>发布</Button>]}
      >
        <p>选择分类</p>
        <div style={{ marginTop: 16, marginBottom: 10 }}>
          <RadioGroup defaultValue={this.state.category} onChange={this.categoryHandleChange}>
            {
              this.state.categories.map((item) => { return <RadioButton key={item.id} value={item.id}>{item.name}</RadioButton> } )
            }
          </RadioGroup>
        </div>
        <p>选择标签</p>
        <MyTag ttt='xxx'>Tag1</MyTag>
        <MyTag ttt='ttt'>Tag2</MyTag>
        <MyTag ttt='ttt'>Tag3</MyTag>
      </Card>
    )
  }

  tags_selector_handler = () => {
    this.setState({show_tags_selector: !this.state.show_tags_selector});
  }

  render(){
    return(
      <Editor>
        <div className='write-post-area'>
          <Row className='title-area'>
            <Col span={12} className="title">
              <input id="post-title" placeholder="文章标题" type='text' onChange={this.changePostTitle} value={this.state.post_title} ref="post_title" />
            </Col>
            <Col span={12} className="operator-area">
              <a className='save-post' onClick={this.tags_selector_handler}>
                发布
                <Icon type={this.state.show_tags_selector ? "caret-up" : "caret-down" } />
                {this.postTagsSelector()}
              </a>
              {this.goBackLink()}
              <Link to='/' title='返回主页'>
                <UserAvatar/>
              </Link>
            </Col>
          </Row>
          <Row className='post-content'>
            <Col span={12} className="post-editor">
             <textarea id="post_content_textarea" placeholder="开始你的创作..." value={this.state.post_content} onChange={this.changePostContent}/>
            </Col>
            <Col span={12} className='post-preview'>
              <ReactMarkdown source={this.state.post_content} />
            </Col>
          </Row>
        </div>
        {
          this.state.alert_it &&
            <AlertIt message={this.state.alert_message} handleClose={this.handleClose} type={this.state.alert_type}/>
        }
      </Editor>
    )
  }
}

PostEditor.childContextTypes = {
  callback: PropTypes.func
}

export default PostEditor;
