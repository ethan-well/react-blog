const new_article =
  (state = {
      article: {
        access_token: sessionStorage.access_token,
        category_id: 1,
        private: false,
      }}, action) => {
    switch (action.type) {
      case 'NEW_ARTICLE':
        const article0 = Object.assign({}, state.article, {
          category_id: action.category,
          title: '',
          content: '',
        })
        return Object.assign({}, state, {
          article: article0,
          edit: false,
          alert: {
            alert_it: false,
          },
        })
      case 'TOGGLE_CLOSE_ICON':
        return Object.assign({}, state, {
          show_ensure_component: action.show_ensure_component
        })
      case 'TOGGLE_ENSURE_ICON':
        return Object.assign({}, state, {
          show_ensure_component: action.show_ensure_component,
          ensure_close: true
        })
      case 'TOGGLE_CANCEL_ICON':
        return Object.assign({}, state, {
          show_ensure_component: action.show_ensure_component,
          ensure_close: false
        })
      case 'HANDLE_TITLE_CHANGE':
        const article1 = Object.assign({}, state.article, {
          title: action.title
        })
        return Object.assign({}, state, {
          article: article1,
        })
      case 'HANDLE_CONTENT_CHANGE':
        const article2 = Object.assign({}, state.article, {
          content: action.content,
        })
        return Object.assign({}, state, {
          article: article2,
        })
      case 'TOGGLE_PUBLISH_ICON':
        return Object.assign({}, state, {
          show_publish_card: !state.show_publish_card,
        })
      case 'SWITCH_CATEGORY_TAG':
        const article4 = Object.assign({}, action.article, {
          category_id: action.category
        })
        return Object.assign({}, state, {
          article: article4
        })
      case 'TOGGLE_EDIT_ICON':
        const article3 = Object.assign({}, action.article, {
          access_token: state.article.access_token,
        })
        return Object.assign({}, state, {
          edit: true,
          article: article3,
          alert: {
            alert_it: false,
          },
        })
      case 'TOGGLE_BACK_ICON':
        return Object.assign({}, state, {

        })
      case 'START_POST_ARTICLE':
        return Object.assign({}, state, {
          postting_article: true,
          show_publish_card: false,
        })
      case 'POST_ARTICLE_FAILED':
        return Object.assign({}, state, {
          post_failed: true,
          show_publish_card: false,
        })
      case 'POST_ARTICLE_SUCCESSED':
        return Object.assign({}, state, {
          post_successed: true,
          create_or_update_successed: !!action.json.state,
          show_publish_card: false,
        })
      case 'TOGGLE_PUBLIC_CHECKBOX':
        const article5 = Object.assign({}, state.article, {
          private: !state.article.private,
        })
        return Object.assign({}, state, {
          article: article5,
        })
      default:
        return state
    }
  }

export default new_article;