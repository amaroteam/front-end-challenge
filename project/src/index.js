import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './store/reducers';
import App from './App';
import { loadState, saveState } from './utils/localstorage';
import { reactotron } from './utils/debug';

const persistedState = loadState();
const store = createStore(
  combineReducers({
    cart: reducers.cart,
    cartFilters: reducers.cartFilters,
    products: reducers.products,
    productsFilters: reducers.productsFilters,
  }),
  persistedState,
  compose(
    applyMiddleware(thunk),
    reactotron.createEnhancer()
  )
);

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
