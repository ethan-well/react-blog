import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Row, Col, Input, Icon} from 'antd';
const { TextArea } = Input;
import { Link, Redirect } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import Editor from '../layouts/Editor';
import * as HttpHandler from '../conserns/HttpHandler';

const history = createHistory({basename: "/", forceRefresh: true})
class PostEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_title: '',
      post_content: '',
      post_prev: '',
      validate: false,
      is_edit: this.props.match.params.id ? true : false,
      article_id: this.props.match.params.id,
    }
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

  callback = (data) => {
    if(data['status'] === 1) {
      history.push(`/post_show/${data['id']}`);
    }
  }

  savePost = () => {
    const url = 'http://localhost:3000/api/articles/create';
    const data = {title: this.state.post_title, content: this.state.post_content};
    const res = HttpHandler.postHandler(url, data, this.callback);
  }

  changePostContent = (event) => {
    this.setState({post_content: event.target.value});
  }

  changePostTitle = (event) => {
    this.setState({post_title: event.target.value});
  }

  goBackLink =() =>{
    return(this.state.is_edit ? <Link to={`/post_show/${this.state.article_id}`} > 返回 </Link> : '')
  }

  render(){
    return(
      <Editor>
        <div className='write-post-area'>
          <Row className='title-area'>
            <Col span={12} className="title">
              <input id="post-title" placeholder="文章标题" type='text' onChange={this.changePostTitle} defaultValue={this.state.post_title} ref="post_title" />
            </Col>
            <Col span={12} className="operator-area">
              <span>
                <Link to="#" onClick={this.savePost}> 发布 </Link>
                {this.goBackLink()}
              </span>
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
      </Editor>
    )
  }
}

export default PostEditor;
