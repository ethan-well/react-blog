import React, { Component } from 'react';

export const fetchCategories  = () =>  (dispathch, action) => {
  dispathch(requestCategories);
  return fetch('http://localhost:3300/api/categories')
    .then(response => response.json())
    .then(json => {
      dispathch(receiveCategories(json));
    })
    .catch(error => dispathch(fetchError(error)))
}

export const requestCategories = {
  type: 'START_REQUEST'
}

export const receiveCategories = (json) => ({
  type: 'RECEIVE_POST',
  categories: json.categories
})

export const fetchError = (error) => ({
  type: 'FETCH_ERROR',
  message: error
})