import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Divider, Icon } from  'antd';
import style from './article.scss';

const Article = ({ article, loginSuccess, toggleEditIcon, toggleBackIcon, toggleDeleteIcon }) => (
  <div className='article-content'>
    { article
      ? <div>
          <div className='title'>
            <Icon
              type="left-circle"
              theme="twoTone"
              className="back-icon"
              onClick={toggleBackIcon}
            />
            {article.title}
            {
              loginSuccess &&
                <span>
                  <Icon
                    type="edit"
                    theme="twoTone"
                    className="edit-icon"
                    onClick={() => toggleEditIcon(article)}
                  />
                  <Icon
                    type="delete"
                    theme="twoTone"
                    className="delete-icon"
                    onClick={() => toggleDeleteIcon(article.id)}
                  />
                </span>
            }
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