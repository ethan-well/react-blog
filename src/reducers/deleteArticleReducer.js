const deleteArticle = (state = {}, action) => {
  switch (action.type) {
    case 'START_DELETE':
      return Object.assign({}, state, {
        isDeleting: true
      })
    case 'DELETE_ERROR':
      return Object.assign({}, state, {
        deleteError: true,
        message: action.message
      })
    case 'DELETE_ARTICLE_SUCCESS':
      return Object.assign({}, state, {
        isDeleting: false,
        result: action.result,
      })
    default:
      return state
  }
}

export default deleteArticle;