import React from 'react';
import { List, Avatar, Icon } from 'antd';
import Style from './article_list.scss';

const generateSummary = (content) => {
  return content ? content.substr(0, 10) : '暂无描述'
}

const formatData = (data_str) => {
  return data_str.substr(0,10);
}

const ArticleList = ({ articles, toggleArticleTitle }) => (
  <ul className="article-list">
    {
      articles && articles.length > 0
      ? articles.map((item) => {
          return <li key={item.id}>
                    <a
                      className="article-title"
                      onClick={() => toggleArticleTitle(item.id)}
                    >
                      {item.title}
                    </a>
                    <span className="article-created-at">{ formatData(item.created_at) }</span>
                    <div className="article-summary">
                      {generateSummary(item.description)}
                    </div>
                  </li>
        })
      : '加载中...'
    }
  </ul>
)

export default ArticleList;
