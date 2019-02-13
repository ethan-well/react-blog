const authen = (state = {}, action) => {
  switch(action.type) {
    case 'START_REQUEST':
      return Object.assign({}, state, {
        isLogining: true,
        show_alert: false,
      })
    case 'REQUEST_FAILED':
      return Object.assign({}, state, {
        loginFailed: true,
        message: action.message,
        show_alert: true,
      })
    case 'REQUEST_SUCCESS':
      return Object.assign({}, state, {
        loginFailed: false,
        isLogining: false,
        loginSuccess: action.loginSuccess,
        access_token: action.access_token,
        show_alert: !action.loginSuccess,
      })
    case 'TOGGLE_CLOSE_ALERT_ICON':
      return Object.assign({}, state, {
        show_alert: false
      })
    default:
      return state
  }
}

export default authen;