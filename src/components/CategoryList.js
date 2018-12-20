import React, {Component} from 'react';
import {GetHandler} from '../conserns/HttpHandler';
import Style from './categories_list.scss';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: new Set(),
    }
  }

  componentWillMount() {
    const url = 'api/categories';
    GetHandler(url, this.callback);
  }

  callback = (data) => {
    console.log(data);
    this.setState({categories: data['categories']});
  }

  render() {
    return (
      <div className="categories-area">
        <ul className="categories-list">
          { this.state.categories.length > 0
            ? this.state.categories.map((item) => {
                return <li key={`${item.id}`}>{item.name}</li>
              })
            : '加载中...'
          }
        </ul>
      </div>
    );
  }
}

export default CategoryList;