import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from "react-router-dom";

import Home from '../views/Home';
import Detail from '../views/Detail';
import Fram from '../layouts/Fram';

class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Fram>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
        </Fram>
      </Router>
    );
  }
}

export default RouteComponent
