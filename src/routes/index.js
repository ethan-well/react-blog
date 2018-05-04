import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
import Home from '../views/Home';
import Detail from '../views/Detail';
import PostEditor from '../views/PostEditor';

class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/create_blog" component={PostEditor}></Route>
        </div>
      </Router>
    );
  }
}

export default RouteComponent
