import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Divider, Icon } from  'antd';
import style from './article.scss';
import table_style from './table_style.scss';

const Article = ({ article, loginSuccess, access_token, toggleEditIcon, toggleBackIcon, toggleDeleteIcon, can_manage }) => (
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
              loginSuccess && can_manage &&
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
                    onClick={() => toggleDeleteIcon({id: article.id, access_token: access_token, category_id: article.category_id})}
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