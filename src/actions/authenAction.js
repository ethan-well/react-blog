import '../../config';
import history from '../history';
import { showAlert, toggleCloseAlertIcon } from '../actions/alertAction';

export const login = (data) => (dispatch, action) => {
  dispatch(startRequest);
  return fetch(`${global.myBlog.apiServer}/api/auth/login`, {
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
      dispatch(toggleCloseAlertIcon)
      history.push('/');
      sessionStorage.setItem('access_token', json.access_token);
    } else {
      dispatch(showAlert(json.msg))
    }
  })
  .catch(error => { dispatch(requestFailed(error)); dispatch(showAlert(error)) })
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

export const goToLoginPage = (dispatch, action) => {
  dispatch(showAlert('继续操作前，请先登陆！'))
  history.push('/login');
}