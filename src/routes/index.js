import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
import Home from '../views/Home';

class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
        </div>
      </Router>
    );
  }
}

export default RouteComponent
