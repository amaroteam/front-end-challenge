import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';

import App from './app/App.js';

ReactDOM.render(
  <>
    <App />
  </>,
  document.querySelector('[data-js="app"]'),
);