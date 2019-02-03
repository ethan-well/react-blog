import { message } from "antd";

export const newArticle = (category) => ({
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

// post 文章
export const postArticle = ({title, content, categery_id, user_id}) => (dispatch, action) => {
  dispatch(startPostArticle)
}

export const startPostArticle = {
  type: 'START_POST_ARTICLE'
}

export const postArticleSuccess = (json) => ({
  type: 'POST_ARTICLE_SUCCESS',
  res: json
})

export const postError = (error) => ({
  type: 'POST_ARTICLE_ERROR',
  message: error
})