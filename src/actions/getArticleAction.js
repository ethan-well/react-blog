export const fetchArticle = (id) => (dispatch, action) => {
  dispatch(requestArticle);
  return fetch(`http://localhost:3300/api/articles/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(reciveArticle(json));
    })
    .catch(error => dispatch(fetchError(error)))
}

export const requestArticle = {
  type: 'START_REQUEST_ARTICLE'
}

export const reciveArticle = (json) => ({
  type: 'RECEIVE_ARTICLE',
  article: json.article
})

export const fetchError = (error) => ({
  type: 'FETCH_ARTICLE_ERROR',
  message: error
})