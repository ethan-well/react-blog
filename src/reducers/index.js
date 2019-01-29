import { combineReducers } from 'redux';

import article from './article';
import category from './category';

const reducer = combineReducers({
  article,
  category
});

export default reducer;