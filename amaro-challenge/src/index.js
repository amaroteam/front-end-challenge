import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-router'
import { Router, browserHistory } from 'react-router';
import App from './components/App';
import { getRoutes } from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
  <Router routes={getRoutes()} history={browserHistory}/>
  , document.getElementById('root'));
registerServiceWorker();
