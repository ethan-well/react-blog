import { combineReducers } from 'redux';

import article from './article';
import category from './category';

const blogApp = combineReducers({
  article,
  category
});

export default blogApp;