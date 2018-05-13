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
      type: 'JavaScript',
      alert_it: false,
      alert_message: '',
      alert_type: 'warning',
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
      const url = `http://localhost:3000/api/articles/show?id=${this.state.article_id}`;
      HttpHandler.GetHandler(url, this.initArticle)
    }
  }

  initArticle = (data) => {
    if(data['status'] === 1) {
      this.setState({ post_title: data['article'].title, post_content: data['article'].content })
    }
  }

  componentDidMount() {
    // const input = document.getElementById('post-title');
    // input.focus();
    this.refs.post_title.focus();
  }

  changePostContent = (event) => {
    const content = event.target.value.trim();
    this.setState({post_content: content});
    if(content.length >= 200){
      this.setState({validate: true});
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

  typeHandleChange = (e) => {
    this.setState({type: e.target.value});
  }

  publishHandle = (e) => {
    if(!this.state.validate){
      this.setState({
        alert_it: true,
        alert_message: '文章字数不能少于 200',
        alert_type: 'warning',
      });
    } else {
      const url = 'http://localhost:3000/api/articles/create';
      const data = {title: this.state.post_title, content: this.state.post_content};
      const res = HttpHandler.postHandler(url, data, this.callback);
    }
    this.setState({show_tags_selector: false});
  }

  callback = (data) => {
    if(data['status'] === 1) {
      history.push(`/post_show/${data['id']}`);
    } else {
      this.setState({
        alert_it: true,
        alert_message: '发布失败',
        alert_type: 'error',
      })
    }
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
          <RadioGroup defaultValue={this.state.type} onChange={this.typeHandleChange}>
            <RadioButton value="JavaScript">JavaScript</RadioButton>
            <RadioButton value="Ruby">Ruby</RadioButton>
            <RadioButton value="React">React</RadioButton>
            <RadioButton value="Linux">Linux</RadioButton>
            <RadioButton value="DB">DB</RadioButton>
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
             <textarea placeholder="开始你的创作..." value={this.state.post_content} onChange={this.changePostContent}/>
            </Col>
            <Col span={12} className='post-preview'>
              <ReactMarkdown source={this.state.post_content} />
            </Col>
          </Row>
        </div>
        {
          this.state.alert_it ?
            <AlertIt message={this.state.alert_message} type={this.state.alert_type}/>
          : null
        }
      </Editor>
    )
  }
}

PostEditor.childContextTypes = {
  callback: PropTypes.func
}

export default PostEditor;
