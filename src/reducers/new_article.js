const new_article = (state = {article: {access_token: sessionStorage.access_token}}, action) => {
  switch (action.type) {
    case 'NEW_ARTICLE':
      const article0 = Object.assign({}, state.article, {
        category_id: action.category,
        title: '',
        content: '',
      })
      return Object.assign({}, state, {
        article: article0,
        edit: false,
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
      const article1 = Object.assign({}, state.article, {
        title: action.title
      })
      return Object.assign({}, state, {
        article: article1,
      })
    case 'HANDLE_CONTENT_CHANGE':
      const article2 = Object.assign({}, state.article, {
        content: action.content,
      })
      return Object.assign({}, state, {
        article: article2,
      })
    case 'TOGGLE_PUBLISH_ICON':
      return Object.assign({}, state, {
        show_publish_card: !state.show_publish_card,
      })
    case 'SWITCH_CATEGORY_TAG':
      return Object.assign({}, state, {
        category: action.category,
      })
    case 'TOGGLE_EDIT_ICON':
      const article3 = Object.assign({}, action.article, {
        access_token: state.article.access_token,
      })
      return Object.assign({}, state, {
        edit: true,
        article: article3,
      })
    case 'TOGGLE_BACK_ICON':
      return Object.assign({}, state, {

      })
    default:
      return state
  }
}

export default new_article;