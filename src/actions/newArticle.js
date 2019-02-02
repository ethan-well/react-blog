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