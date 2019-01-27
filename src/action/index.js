import React, { Component } from 'react';
import { request } from 'https';

export const requestPostsByCategory  = (category_id) =>  (dispathch, action) => {
  dispathch(requestPost);
  return fetch(`/${category_id}`)
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
  post: json.post
})

export const fetchError = (error) => ({
  type: 'FETCH_ERROR',
  message: error
})
