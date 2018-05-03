import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
import Home from '../views/Home';
import Detail from '../views/Detail';
import CreateBlog from '../views/Editor';

class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/create_blog" component={CreateBlog}></Route>
        </Switch>
      </Router>
    );
  }
}

export default RouteComponent
