export const fetchArticles = (category_id) =>  (dispatch, action) => {
  dispatch(requestArticles);
  return fetch(`http://localhost:3300/api/categories/${category_id}/articles`)
    .then(response => response.json())
    .then(json => {
      dispatch(receivePost(json));
    })
    .catch(error => dispatch(fetchError(error)))
}

export const requestArticles = {
  type: 'START_REQUEST_CATEGORY'
}

export const receivePost = (json) => ({
  type: 'RECEIVE_CATEGORY',
  articles: json.articles
})

export const fetchError = (error) => ({
  type: 'FETCH_CATEGORY_ERROR',
  message: error
})