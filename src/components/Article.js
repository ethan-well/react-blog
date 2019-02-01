import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Divider } from  'antd';
import style from './article.scss';

const Article = ({ article }) => (
  <div className='article-content'>
    { article
      ? <div>
          <div className='title'>
            {article.title}
          </div>
          <Divider className='divider' />
          <div className='content'>
            <ReactMarkdown source={article.content}/>
          </div>
        </div>
      : '加载中...'
    }
  </div>
)

export default Article;