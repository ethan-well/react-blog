import React from 'react';
import { Avatar } from 'antd';

class UserAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ backgroundColor: '#87d068' }} icon="user" />
    )
  }
}

export default UserAvatar;
