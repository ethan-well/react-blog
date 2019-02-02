import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import IndexContainer from './IndexContainer';
import reducer from '../reducers/index';


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
        <IndexContainer />
      </Provider>
    );
  }
}

export default HomeContainer
