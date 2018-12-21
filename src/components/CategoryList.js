import React, {Component} from 'react';
import {GetHandler} from '../conserns/HttpHandler';
import Style from './categories_list.scss';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: new Set(),
      active_id: 1
    }
  }

  componentWillMount() {
    const url = 'api/categories';
    GetHandler(url, this.callback);
  }

  callback = (data) => {
    this.setState({categories: data['categories']});
  }

  changeActive = (id, e) => {
    this.setState({active_id: id});
  }

  render() {
    return (
      <div className="categories-area">
        <ul className="categories-list">
          { this.state.categories.length > 0
            ? this.state.categories.map((item) => {
                return <li key={item.id}
                         className={ this.state.active_id == item.id ? 'active' : '' }
                         onClick={(e) =>  this.changeActive(item.id, e)}
                       >
                         {item.name}
                       </li>
              })
            : '加载中...'
          }
        </ul>
      </div>
    );
  }
}

export default CategoryList;