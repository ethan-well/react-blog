import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Icon, Menu, List } from 'antd';
import createHistory from 'history/createBrowserHistory';
const history = createHistory({basename: "/", forceRefresh: true});
import * as HttpHandler from '../conserns/HttpHandler';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_user_avatar_operation_panel: false,
      access_token: sessionStorage.getItem('access_token'),
    }
  }

  handleShowPanel = () => {
    this.setState({show_user_avatar_operation_panel: true});
  }

  handleDisplayPanel = () => {
    this.setState({show_user_avatar_operation_panel: false});
  }

  handleLogut = (data) => {
    if(data['status'] === 1) {
      sessionStorage.removeItem('access_token');
      history.push('/');
    } else {
      console.log(`logout error: ${date['message']}`);
    }
  }

  logOut = () => {
    const url = `api/auth/logout?access_token=${this.state.access_token}`;
    HttpHandler.DeleteHandler(url, this.handleLogut);
  }

  pathAfterLogin = () => {
    !this.state.access_token && sessionStorage.setItem('path_after_login', '/post_new');
  }

  render() {
    const action = this.state.access_token ?
      [<span onClick={this.logOut} ><Icon type="logout" /> 退出 </span>] : []
    const avatar_operation_panel =
    <Card title="weiwei" onClick={this.stopPropagation}
      style={ {display: this.state.show_user_avatar_operation_panel ? '' : 'none'} }
      className="avatar-operation-panel"
      actions={action}
    >
      <p>我的喜欢（规划中）</p>
      <p>我的收藏（规划中）</p>
    </Card>

    return (
      <nav className='header-nav header-nav-right'>
        <ul className='header-nav-list'>
          <li className='header-nav-item'>
            <Link to="/" >主页</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/about" >关于</Link>
          </li>
          <li className='header-nav-item' onClick={this.pathAfterLogin}>
            <Link to={this.state.access_token ? '/post_new' : '/login'} >写文章</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/create_site" >自建站</Link>
          </li>
          {
            this.state.access_token ?
              <li className='header-nav-item user-avatar-panel' onMouseLeave={this.handleDisplayPanel} onMouseEnter={this.handleShowPanel}>
                <UserAvatar/>
                <Icon type="caret-down" className={this.state.show_user_avatar_operation_panel ? 'active' : ''} />
                { avatar_operation_panel }
              </li>
            :
              <li className='header-nav-item user-avatar-panel'>
                <UserAvatar/>
              </li>
          }
        </ul>
      </nav>
    );
  }
}

export default Nav;
