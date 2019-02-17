export const toggleDeleteIcon = (id) => (dispatch, action) => {
  dispatch(startDelete);
  console.log(id)
  return  fetch(``)
    .then(response => response.json())
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