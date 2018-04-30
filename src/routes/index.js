import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from "react-router-dom";

import Home from '../views/Home';
import Detail from '../views/Detail';
import Index from '../layouts/Index';

class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Index>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
        </Index>
      </Router>
    );
  }
}

export default RouteComponent
