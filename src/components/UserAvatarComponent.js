import React, {Component} from 'react';
import { Avatar } from 'antd';
import logo from '../images/logo.svg'

class UserAvatar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="user-avatar">
        <image src={logo}></image>
        <Avatar
          size={64}
          src={logo}
          style={{ backgroundColor: '#87d068' }}
        />
      </div>
    )
  }
}

export default UserAvatar;
