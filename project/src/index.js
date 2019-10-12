import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './store';
import App from './App';
import { loadState, saveState, reactotron } from './utils';

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
    <App />
  </Provider>,
  document.getElementById('root')
);
