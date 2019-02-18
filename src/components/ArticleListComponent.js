import React from 'react';
import { List, Avatar, Icon } from 'antd';
import Style from './article_list.scss';

const generateSummary = (content) => {
  return content ? content.substr(0, 10) : '暂无描述'
}

const formatData = (data_str) => {
  return data_str.substr(0,10);
}

const ArticleList = ({ articles, isFetching, toggleArticleTitle, access_token }) => (
  <ul className="article-list">
    {
      isFetching
      ? '加载中...'
      : articles && articles.length > 0
        ? articles.map((item) => {
            return <li key={item.id}>
                      <a
                        className="article-title"
                        onClick={() => toggleArticleTitle(item.id, access_token)}
                      >
                        {item.title}
                      </a>
                      <span className="article-created-at">{ formatData(item.created_at) }</span>
                      <div className="article-summary">
                        {generateSummary(item.description)}
                      </div>
                    </li>
          })
        : '没有数据'
    }
  </ul>
)

export default ArticleList;
