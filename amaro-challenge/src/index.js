import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { getRoutes } from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './actions/localStorage';
import throttle from 'lodash/throttle';
import './css/index.css';

const store = configureStore(loadState());

store.subscribe(throttle(() => {
  saveState({
    shoppingCart: store.getState().shoppingCart
  })
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <Router routes={getRoutes()} history={browserHistory}/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
