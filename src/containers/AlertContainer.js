import React from 'react';
import { Alert } from 'antd';
import { connect } from 'react-redux';
import { toggleCloseAlertIcon } from '../actions/alertAction';

class AlertContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    this.props.toggleCloseAlertIcon()
  }

  render() {
    return (
      <div className='alert-it'>
        {
          this.props.show ? (
            <Alert
              message={this.props.message}
              type={this.props.type}
              closable
              afterClose={this.handleClose}
            />
          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  show: state.alert.show,
  message: state.alert.message,
  type: state.alert.type,
})

const mapDispatchToProps = (dispatch) => ({
  toggleCloseAlertIcon: () => dispatch(toggleCloseAlertIcon),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertContainer)
