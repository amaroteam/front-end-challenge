// Polyfills
import 'core-js/shim';
import 'classlist-polyfill';
import 'utils/polyfills.js';

import 'expose?$!expose?jQuery!jquery';
import 'bootstrap/dist/js/umd/modal';
// import 'bootstrap/dist/js/umd/dropdown';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import Root from 'containers/Root';
import store from 'store';
import '../styles/main.scss';

const history = syncHistoryWithStore(browserHistory, store);

function renderApp(RootComponent) {
  ReactDOM.render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    document.getElementById('react')
  );
}

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    'containers/Root',
    () => renderApp(require('containers/Root'))
  );
}
