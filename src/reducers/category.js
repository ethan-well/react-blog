const category = (state = {}, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_ERROR':
      return Object.assign({}, state, {
        fetchError: true,
        message: action.message
      })
    case 'RECEIVE_POST':
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.categories,
        active_id: action.active_id
      })
    default:
      return state
  }
}

export default category;