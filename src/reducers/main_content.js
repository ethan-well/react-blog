const main_content = (state = {main_content: 'article_list'}, action) => {
  switch (action.type) {
    case 'SWITCH_MAIN_CONTENT':
      return Object.assign({}, state, {
        main_content: action.main_content
      })
    default:
      return state
  }
}

export default main_content;