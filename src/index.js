import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import productsReducer from './reducers';

import App from './components/App';

const history = createBrowserHistory();

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  connectRouter(history)(productsReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
