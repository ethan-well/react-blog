import React from 'react';
import ReactMarkdown from 'react-markdown';

const Article = ({ article }) => (
  <div>
    { article
      ? <div>
          <div className='title'>
            {article.title}
          </div>
          <div className='content'>
            <ReactMarkdown source={article.content}/>
          </div>
        </div>
      : '加载中...'
    }
  </div>
)

export default Article;