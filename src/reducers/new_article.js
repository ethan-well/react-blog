const new_article = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_ARTICLE':
      return Object.assign({}, state, {
        category: action.category
      })
    case 'TOGGLE_CLOSE_ICON':
      return Object.assign({}, state, {
        show_ensure_component: action.show_ensure_component
      })
    case 'TOGGLE_ENSURE_ICON':
      return Object.assign({}, state, {
        show_ensure_component: action.show_ensure_component,
        ensure_close: true
      })
    case 'TOGGLE_CANCEL_ICON':
      return Object.assign({}, state, {
        show_ensure_component: action.show_ensure_component,
        ensure_close: false
      })
    case 'HANDLE_TITLE_CHANGE':
      return Object.assign({}, state, {
        title: action.title
      })
    case 'HANDLE_CONTENT_CHANGE':
      return Object.assign({}, state, {
        content: action.content
      })
    case 'TOGGLE_PUBLISH_ICON':
      return Object.assign({}, state, {
        show_publish_card: !state.show_publish_card
      })
    default:
      return state
  }
}

export default new_article;