const authen =
  (state = {loginSuccess: !!sessionStorage.access_token}, action) => {
    switch(action.type) {
      case 'START_REQUEST':
        return Object.assign({}, state, {
          isLogining: true,
          access_token: sessionStorage.access_token,
        })
      case 'REQUEST_FAILED':
        return Object.assign({}, state, {
          loginFailed: true,
          message: action.message,
        })
      case 'REQUEST_SUCCESS':
        return Object.assign({}, state, {
          loginFailed: false,
          isLogining: false,
          loginSuccess: action.loginSuccess,
          access_token: action.access_token,
          message: state.message,
        })
      default:
        return state
    }
}

export default authen;