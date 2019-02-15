import history from '../history';

export const login = (data) => (dispatch, action) => {
  dispatch(startRequest);
  return fetch(`http://localhost:3300/api/auth/login`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
  .then(json => {
    dispatch(requestSuccess(json))
    if (!!json.status) {
      history.push('/');
      sessionStorage.setItem('access_token', json.access_token);
    }
  })
  .catch(error => dispatch(requestFailed(error)))
}

export const startRequest = {
  type: 'START_REQUEST',
}

export const requestFailed = (error) => ({
  type: 'REQUEST_FAILED',
  message: error,
})

export const requestSuccess = (json) => ({
  type: 'REQUEST_SUCCESS',
  loginSuccess: !!json.status,
  access_token: json.access_token,
  message: json.msg,
})

export const toggleCloseAlertIcon =  {
  type: 'TOGGLE_CLOSE_ALERT_ICON'
}

export const goToLoginPage = (dispatch,action) => {
  dispatch(changeAlertInfo);
  // history.push('/login');
}

export const changeAlertInfo = {
  type: 'CHANGE_ALERT_INFO',
  message: '继续操作前，请登陆！',
}