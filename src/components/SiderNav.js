import React, { Component } from 'react';
import UserAvatar from './UserAvatar';
import CategoryList from '../containers/CategoryList';
import Style from './user_avatar.scss';

class SiderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-nav">
        <UserAvatar/>
        <CategoryList />
      </div>
    );
  }
}

export default SiderNav;