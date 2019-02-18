const alert = (state = {show: false}, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return Object.assign({}, state, {
        show: true,
        message: action.message,
        type: 'warning',
      })
    case 'TOGGLE_CLOSE_ALERT_ICON':
      return Object.assign({}, state, {
        show: false,
        message: ''
      })
    default:
      return state
  }
}

export default alert;