import React from 'react';
import { Alert } from 'antd';

class AlertIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      type: 'success',
    }
  }

  handleClose = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className='alert-it'>
        {
          this.state.visible ? (
            <Alert
              message={this.props.message}
              type={this.props.type}
              closable
              onClose={this.props.handleClose}
              afterClose={this.handleClose}
            />
          ) : null
        }
      </div>
    );
  }
}

export default AlertIt
