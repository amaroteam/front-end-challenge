import React from 'react';
import ReactDOM from 'react-dom';

import MainApp from './components/MainApp.jsx';

// App css
require('./styles/app.scss');

ReactDOM.render(
  <MainApp/>,
  document.getElementById('app')
);