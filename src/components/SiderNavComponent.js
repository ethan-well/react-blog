import React, { Component } from 'react';
import UserAvatar from './UserAvatarComponent';
import CategoryListContainer from '../containers/CategoryListContainer';
import Style from './user_avatar.scss';

class SiderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-bar">
        <div className="side-nav">
          <UserAvatar/>
          <CategoryListContainer />
        </div>
      </div>
    );
  }
}

export default SiderNav;