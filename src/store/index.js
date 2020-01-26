import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './ducks';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
