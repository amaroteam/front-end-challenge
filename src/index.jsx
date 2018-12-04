import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import Routes from './routes';
import fetchProductsThunk from './store/ducks/thunks';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';
import store from './store';

WebFont.load({
  google: {
    families: ['Noto Sans SC:400,600,700', 'sans-serif'],
  },
});

ReactDOM.render(
  <Provider
    store={store}
    onLoad={store.dispatch(fetchProductsThunk())}
  >
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
