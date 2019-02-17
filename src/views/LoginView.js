import React from 'react';
import LoginFormContainer from '../containers/LoginFormContainer';
import Simple from '../layouts/Simple';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Simple>
        <div className='login-form-area'>
          <div className='logo'></div>
          <div className='slogon'>
            <h2>
              开始你的创作!
            </h2>
            <h4>(本站写权限暂时未开放)</h4>
          </div>
          <LoginFormContainer />
        </div>
      </Simple>
    )
  }
}

export default LoginView;
