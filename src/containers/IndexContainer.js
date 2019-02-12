import React from 'react';
import { connect } from 'react-redux';
import NewArticleView from '../views/NewArticleView';
import HomeView from '../views/HomeView';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class IndexContainer extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeView} />
          <Route path='/new-aricle' component={NewArticleView} />
        </div>
      </Router>
    )
  }
}



export default IndexContainer;