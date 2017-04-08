import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import shopApp from './reducers'
import App from './components/App'

import STATE from '../products'

let store = createStore(
  shopApp,
  STATE,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
)