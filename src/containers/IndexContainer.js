import React from 'react';
import { connect } from 'react-redux';
import NewArticleView from '../views/NewArticleView';
import HomeView from '../views/HomeView';
import { Router, Route } from 'react-router-dom'
import history from '../history';
import LoginView from '../views/LoginView';

class IndexContainer extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div id="router">
          <Route exact path="/" component={HomeView} />
          <Route path='/new-article' component={NewArticleView} />
          <Route path='/login' component={LoginView} />
        </div>
      </Router>
    )
  }
}



export default IndexContainer;