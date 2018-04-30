import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/" >Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/detail/1" >Detail</Link>
          </Menu.Item>
        </Menu>
      </nav>
    );
  }
}

export default Nav;
