import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import reducers from './ducks';
import history from '../routes/history';
import { loadState, saveState } from '../utils/localStorage';

const persistedState = loadState();

const middlewares = [
  thunk,
  routerMiddleware(history),
];

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  reducers(history),
  persistedState,
  composeEnhancer(applyMiddleware(...middlewares)),
);

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export default store;
