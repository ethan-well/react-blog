const category = (state = {}, action) => {
  switch (action.type) {
    case 'START_REQUEST_ARTICLE':
      return Object.assign({}, state, {
        fetchingArticle: true
      })
    case 'FETCH_ARTICLE_ERROR':
      return Object.assign({}, state, {
        fetchArticleError: true,
        message: action.message
      })
    case 'RECEIVE_ARTICLE':
      return Object.assign({}, state, {
        fetchingArticle: false,
        article: action.article,
        can_manage: action.can_manage,
      })
    default:
      return state
  }
}

export default category;