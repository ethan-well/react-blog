import React, { Component } from 'react';
import UserAvatar from './UserAvatar';
import CategoryList from './CategoryList';

class SiderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserAvatar/>
        <CategoryList />
      </div>
    );
  }
}

export default SiderNav;