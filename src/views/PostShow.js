import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Row, Col, Icon } from 'antd';
import Index from '../layouts/Index';
import { Link } from 'react-router-dom';
import ArticleNav from '../views/ArticleNav';
import * as HttpHandler from '../conserns/HttpHandler';
import Style from '../layouts/post_show_area.scss';

class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load_succeed: false,
      article_id: this.props.match.params.id,
      article: {},
    }
  }

  callback = (data) => {
    if(data['status'] === 1) {
      console.log(data)
      this.setState({load_succeed: true, article: data['article']});
    }
  }

  componentWillMount(){
    const url = `http://localhost:3000/api/articles/show?id=${this.state.article_id}`;
    HttpHandler.GetHandler(url, this.callback)
  }

  render() {
    const article_show = this.state.load_succeed
    ? <Row>
        <div className='title'>
          {this.state.article.title}
          <Link to={`/edit/${this.state.article_id}`} className='post-edit'>
            <Icon type="edit" />
          </Link>
        </div>
        <div className='content'><ReactMarkdown source={this.state.article.content}/></div>
      </Row>
    : <Row>
        <div>加载中....</div>
      </Row>

    return(
      <Index>
        <Row>
          <Col span={4}></Col>
          <Col span={12} className="post-show-area">
            {article_show}
          </Col>
          <Col span={6}>
            <ArticleNav />
          </Col>
          <Col span={2}></Col>
        </Row>
      </Index>
    )
  }
}

export default PostShow;
