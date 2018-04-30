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
            <Link to="/detail/1" >关于我</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/detail/2" >博文</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/detail/3" >自建站</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
