import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import reducers from './store/reducers';
import App from './App';
import { loadState, saveState } from './utils/localstorage';
import { reactotron } from './utils/debug';
import breakpoints from './theme/breakpoints';

const persistedState = loadState();
const store = createStore(
  combineReducers({
    cart: reducers.cart,
    cartFilters: reducers.cartFilters,
    products: reducers.products,
    productsFilters: reducers.productsFilters,
    modal: reducers.modal,
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

const theme = {
  breakpoints,
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
