export const showAlert = (message) => ({
  type: 'SHOW_ALERT',
  message: message === 'Unauthorized' ? '账号或密码错误' : message,
})

export const toggleCloseAlertIcon = {
  type: 'TOGGLE_CLOSE_ALERT_ICON'
}