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
            <Link to="/" >Home</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/detail/1" >Detail</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
