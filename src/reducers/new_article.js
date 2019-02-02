const new_article = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_ARTICLE':
      return Object.assign({}, state, {
        category: action.category
      })
    default:
      return state
  }
}

export default new_article;