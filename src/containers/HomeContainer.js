import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import Home from '../views/Home';
import reducer from '../reducers/index';
import requestPostsByCategory from '../actions/getCategories'


const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default HomeContainer
