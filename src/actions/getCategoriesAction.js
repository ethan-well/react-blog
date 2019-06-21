import '../../config';
export const fetchCategories  = () =>  (dispatch, action) => {
  dispatch(requestCategories);
  return fetch(`${global.myBlog.apiServer}/api/categories`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveCategories(json));
    })
    .catch(error => dispatch(fetchError(error)))
}

export const requestCategories = {
  type: 'START_REQUEST'
}

export const receiveCategories = (json) => ({
  type: 'RECEIVE_POST',
  categories: json.categories,
  active_id: json.categories[0].id
})

export const fetchError = (error) => ({
  type: 'FETCH_ERROR',
  message: error
})

export const fetchArticlesByCategoryId = (active_id) => ({
  type: 'TOGGLE_CATEGORY',
  active_id
})
