import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, List } from 'antd';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <nav className='header-nav header-nav-right'>
        <ul className='header-nav-list'>
          <li className='header-nav-item'>
            <Link to="/" >主页</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/about_me" >关于我</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/post_new" >写文章</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/create_site" >自建站</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
