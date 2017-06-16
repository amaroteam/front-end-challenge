import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { getRoutes } from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={getRoutes()} history={browserHistory}/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
