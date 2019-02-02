import React, {Component} from 'react';
import { Icon } from 'antd';
import Style from './categories_list.scss';
import { toggleAddIcon } from '../actions/newArticle';

const CategoryListComponent = ({ state, toggleArticle, toggleAddIcon }) => (
  <div className="categories-area">
    <ul className="categories-list">
      { state && state.categories && state.categories.length > 0
        ? state.categories.map((item) => {
            return <li key={item.id}>
                     <a
                       className={ state.active_id == item.id ? 'active' : ''}
                       onClick={ () => toggleArticle(item.id, 'article_list')}
                     >
                      {item.name}
                     </a>
                     <Icon
                       type='plus'
                       className='article add'
                       onClick={ () => toggleAddIcon(item.id, 'new_article')}
                     />
                   </li>
          })
        : '加载中...'
      }
    </ul>
  </div>
)

export default CategoryListComponent;