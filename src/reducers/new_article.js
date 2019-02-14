const new_article = (state = {article: {}}, action) => {
  switch (action.type) {
    case 'NEW_ARTICLE':
      const article0 = Object.assign({}, state.article, {
        category_id: action.category
      })
      return Object.assign({}, state, {
        article: article0
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
      return Object.assign({}, state, {
        edit: true,
        article: action.article,
      })
    case 'TOGGLE_BACK_ICON':
      return Object.assign({}, state, {

      })
    default:
      return state
  }
}

export default new_article;