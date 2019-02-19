import '../../config';
import history from '../history';
import { fetchArticle } from './getArticleAction';
import { switchMainContentAction } from './switchMainContentAction';
import { showAlert } from '../actions/alertAction';

export const newArticleAction = (category) => ({
  type: 'NEW_ARTICLE',
  category: category
})

export const toggleCloseIcon = {
  type: 'TOGGLE_CLOSE_ICON',
  show_ensure_component: true
}

export const toggleEnsureIcon = {
  type: 'TOGGLE_ENSURE_ICON',
  ensure_close: true,
  show_ensure_component: false
}

export const toggleCancelIcon = {
  type: 'TOGGLE_CANCEL_ICON',
  ensure_close: false,
  show_ensure_component: false
}

export const handleTitleChange = (title) => ({
  type: 'HANDLE_TITLE_CHANGE',
  title: title
})

export const handleContentChange = (content) => ({
  type: 'HANDLE_CONTENT_CHANGE',
  content: content
})

export const togglePublishIcon = {
  type: 'TOGGLE_PUBLISH_ICON'
}

// post create
export const createArticle = ({...data}) => (dispatch, action) => {
  dispatch(startPostArticle)
  return fetch(`${global.myBlog.apiServer}/api/articles`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
  .then(json => {
    dispatch(postArticleSuccessed(json))
    if (json.status === 1) {
      console.log('json', json);
      console.log('data', data);
      dispatch(fetchArticle(json.id, data.access_token))
      dispatch(switchMainContentAction('article_content'))
      history.push('/')
    } else {
      dispatch(showAlert(json.msg))
    }
  })
  .catch(error => dispatch(postError(error)))
}

export const updateArticle = ({...data}) => (dispatch, action) => {
  dispatch(startPostArticle)
  return fetch(`${global.myBlog.apiServer}/api/articles/${data.id}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
  .then(json => {
    dispatch(postArticleSuccessed(json))
    if (json.status === 1) {
      dispatch(fetchArticle(json.id))
      dispatch(switchMainContentAction('article_content'))
      history.push('/')
    } else {
      dispatch(showAlert('提交失败！'))
    }
  })
  .catch(error => dispatch(postError(error)))
}

export const startPostArticle = {
  type: 'START_POST_ARTICLE'
}

export const postArticleSuccessed = (json) => ({
  type: 'POST_ARTICLE_SUCCESSED',
  json: json
})

export const postError = (error) => ({
  type: 'POST_ARTICLE_FAILED',
  message: error
})

export const switchCategoryTag = (category) => ({
  type: 'SWITCH_CATEGORY_TAG',
  category: category
})

export const toggleEditIcon = (article) => ({
  type: 'TOGGLE_EDIT_ICON',
  article: article,
})

export const toggleDeleteIcon = (id) => ({
  type: 'TOGGLE_DELETE_ICON',
  id: action.id,
})

export const toggleBackIcon = {
  type: 'TOGGLE_BACK_ICON',
}

export const togglePublicCheckbox = {
  type: 'TOGGLE_PUBLIC_CHECKBOX'
}