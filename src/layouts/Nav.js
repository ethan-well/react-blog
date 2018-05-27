import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Icon, Menu, List } from 'antd';
import UserAvatar from './UserAvatar';
import createHistory from 'history/createBrowserHistory';
const history = createHistory({basename: "/", forceRefresh: true});

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

  logOut = () => {
    sessionStorage.removeItem('access_token');
    history.push('/');
  }

  render() {
    const action = this.state.access_token ?
      [<span><Icon type="logout" onClick={this.logOut} /> 退出 </span>] : []
    const avatar_operation_panel =
    <Card title="weiwei" onClick={this.stopPropagation}
      style={ {display: this.state.show_user_avatar_operation_panel ? '' : 'none'} }
      className="avatar-operation-panel"
      actions={action}
    >
      <p>喜欢的文章</p>
      <p>收藏的文章</p>
    </Card>

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
          <li className='header-nav-item user-avatar-panel' onMouseLeave={this.handleDisplayPanel} onMouseEnter={this.handleShowPanel}>
            <UserAvatar/>
            <Icon type="caret-down" className={this.state.show_user_avatar_operation_panel ? 'active' : ''} />
            { avatar_operation_panel }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
