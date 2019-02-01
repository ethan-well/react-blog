import React from 'react';

const article = (state = {}, action) => {
  switch (action.type) {
    case 'START_REQUEST_CATEGORY':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_CATEGORY_ERROR':
      return Object.assign({}, state, {
        fetchError: true
      })
    case 'RECEIVE_CATEGORY':
      return Object.assign({}, state, {
        isFetching: false,
        articles: action.articles
      })
    case 'TOGGLE_ARTICLE_TITLE':
      return Object.assign({}, state, {
        article_id: action.article_id
      })
    default:
      return state
  }
}

export default article;