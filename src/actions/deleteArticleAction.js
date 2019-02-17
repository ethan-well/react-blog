export const toggleDeleteIcon = (data) => (dispatch, action) => {
  dispatch(startDelete);
  return  fetch(`http://localhost:3300/api/articles/${data.id}?access_token=${data.access_token}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
  .then(json => {
    dispatch(deleteArticle(json))
  })
  .catch(error => dispatch(deleteError(error)))
}

export const startDelete = {
  type: 'START_DELETE'
}

export const deleteArticle = (json) => ({
  type: 'DELETE_ARTICLE',
  result: json,
})

export const deleteError = (error) => ({
  type: 'DELETE_ERROR',
  message: error,
})