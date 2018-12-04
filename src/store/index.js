import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import thunk from 'redux-thunk';
import reducers from './ducks';
import history from '../routes/history';

const middlewares = [
  thunk,
  routerMiddleware(history),
];

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default createStore(
  reducers(history),
  composeEnhancer(applyMiddleware(...middlewares)),
);
