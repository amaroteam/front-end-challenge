import { createStore, compose } from 'redux';
// import reducers from './ducks';

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  composeEnhancer()
);

export default store;
