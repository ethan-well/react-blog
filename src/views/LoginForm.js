import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import * as HttpHandler from '../conserns/HttpHandler';
import AlertIt from './AlertIt';
import createHistory from 'history/createBrowserHistory';
const history = createHistory({basename: "/", forceRefresh: true})

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert_it: false,
      alert_message: '',
      alert_type: 'warning',
    }
  }

  loginCallbak = (data) => {
    if(data['status'] === 1) {
      sessionStorage.setItem('access_token', data['access_token']);
      history.push(sessionStorage.getItem('path_after_login') || '/');
    } else {
      this.setState({
        alert_it: true,
        alert_message: '登录失败：账号或密码错误！',
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const url = 'http://localhost:3000/api/auth/login';
        HttpHandler.postHandler(url, values, this.loginCallbak);
      }
    });
  }

  handleClose = () => {
    this.setState({
      alert_it: false,
    });
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
          this.state.alert_it &&
            <AlertIt message={this.state.alert_message} handleClose={this.handleClose} type={this.state.alert_type}/>
        }
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
