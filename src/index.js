import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createHistory from 'history/createBrowserHistory';

import configureStore from './configureStore';

import App from './components/App';

const initialState = {};

const history = createHistory();

const { store, persistor } = configureStore(initialState, history);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
