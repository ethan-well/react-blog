import React, { Component } from 'react';

export const requestPostsByCategory  = (category_id) =>  (dispathch, action) => {
  dispathch(requestPost);
  return fetch('http://localhost:3300/api/categories/1/articles')
    .then(response => response.json())
    .then(json => {
      dispathch(receivePost(json));
    })
    .catch(error => dispathch(fetchError(error)))
}

export const requestPost = {
  type: 'START_REQUEST'
}

export const receivePost = (json) => ({
  type: 'RECEIVE_POST',
  articles: json.articles
})

export const fetchError = (error) => {
  type: 'FETCH_ERROR',
  message: error
}