import React from 'react';
import { connect } from 'react-redux';
import NewArticleView from '../views/NewArticleView';
import HomeView from '../views/HomeView';
import { Router, Route } from 'react-router-dom'
import history from '../history';
import Login from '../views/Login';

class IndexContainer extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={HomeView} />
          <Route path='/new-aricle' component={NewArticleView} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}



export default IndexContainer;