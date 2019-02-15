import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import { connect } from 'react-redux';
import { login, toggleCloseAlertIcon } from '../actions/authenAction';
import AlertIt from '../views/AlertIt';

class NormalLoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    });
  }

  handleClose = () => {
    this.props.toggleCloseAlertIcon()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('login', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  size="large" placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button">
            登录
          </Button>
        </FormItem>
        {
          this.props.authen.show_alert &&
            <AlertIt
              message={this.props.authen.message}
              handleClose={this.handleClose}
              type='warning'
            />
        }
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  authen: state.authen
})

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  toggleCloseAlertIcon: () => dispatch(toggleCloseAlertIcon),
})

const WrappedNormalLoginForm = Form.create()(NormalLoginFormContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
