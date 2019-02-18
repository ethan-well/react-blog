import { switchMainContentAction } from '../actions/switchMainContentAction';
import { fetchArticlesByCategoryId } from '../actions/getCategoriesAction';
import { showAlert } from '../actions/alertAction';


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
    dispatch(deleteArticleSuccess(json))
    if (json.status === 1) {
      dispatch(switchMainContentAction('article_list'))
      dispatch(fetchArticlesByCategoryId(data.category_id))
    } else {
      dispatch(showAlert('删除失败！'))
    }
  })
  .catch(error => dispatch(deleteError(error)))
}

export const startDelete = {
  type: 'START_DELETE'
}

export const  deleteArticleSuccess = (json) => ({
  type: 'DELETE_ARTICLE_SUCCESS',
  result: json,
})

export const deleteError = (error) => ({
  type: 'DELETE_ERROR',
  message: error,
})