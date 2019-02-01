import { combineReducers } from 'redux';

import article from './article';
import category from './category';
import article_detail from './article_detail';
import main_content from './main_content';

const reducer = combineReducers({
  article,
  category,
  article_detail,
  main_content
});

export default reducer;