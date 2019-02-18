import { combineReducers } from 'redux';

import article from './articleReducer';
import category from './categoryReducer';
import article_detail from './articleDetailReducer';
import main_content from './mainContentReducer';
import new_article from './newArticleReducer';
import authen from './authenReducer';
import deleteArticle from './deleteArticleReducer';
import alert from './alertReducer';

const reducer = combineReducers({
  article,
  category,
  article_detail,
  main_content,
  new_article,
  authen,
  deleteArticle,
  alert,
});

export default reducer;