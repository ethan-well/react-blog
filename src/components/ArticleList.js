import React from 'react';
import { List, Avatar, Icon } from 'antd';
import * as HttpHandler from '../conserns/HttpHandler';
import Style from './article_list.scss';

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: new Set(),
    }
  }

  componentWillMount(){
    const url = 'api/articles';
    HttpHandler.GetHandler(url, this.callback);
  }

  callback = (data) => {
    console.log(data);
    this.setState({articleList: data});
  }

  generateSummary = (content) => {
    return content.substr(0, 150);
  }

  formatData = (data_str) => {
    return data_str.substr(0,10);
  }

  render(){
    return(
      <ul className="article-list">
        {
          this.state.articleList.length > 0
          ? this.state.articleList.map((item) => {
              return <li key={item.id}>
                        <a className="article-title">
                          {item.title}
                        </a>
                        <span className="article-created-at">{ this.formatData(item.created_at) }</span>
                        <div className="article-summary">
                          {this.generateSummary(item.content)}
                        </div>
                      </li>
            })
          : '加载中'
        }
      </ul>
    )
  }
}

export default ArticleList;
