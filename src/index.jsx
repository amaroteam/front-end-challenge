import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './containers/App';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Noto Sans SC:400,600,700', 'sans-serif'],
  },
});

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.unregister();
