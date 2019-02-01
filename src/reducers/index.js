import { combineReducers } from 'redux';

import article from './article';
import category from './category';
import article_detail from './article_detail';

const reducer = combineReducers({
  article,
  category,
  article_detail
});

export default reducer;