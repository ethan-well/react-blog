import '../../config';
export const fetchArticle = (id, access_token) => (dispatch, action) => {
  dispatch(requestArticle);
  return fetch(`${global.myBlog.apiServer}/api/articles/${id}?access_token=${access_token}`)
    .then(response => response.json())
    .then(json => {
      dispatch(reciveArticle(json));
    })
    .catch(error => dispatch(fetchError(error)))
}

export const requestArticle = {
  type: 'START_REQUEST_ARTICLE',
}

export const reciveArticle = (json) => ({
  type: 'RECEIVE_ARTICLE',
  article: json.article,
  can_manage: json.can_manage,
})

export const fetchError = (error) => ({
  type: 'FETCH_ARTICLE_ERROR',
  message: error,
})