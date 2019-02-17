import React, {Component} from 'react';
import { Avatar } from 'antd';

class UserAvatar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="user-avatar">
        <Avatar
          size={64}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          style={{ backgroundColor: '#87d068' }}
        />
      </div>
    )
  }
}

export default UserAvatar;
