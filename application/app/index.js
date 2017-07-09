import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'

// not using modules, import css for hmr only and extract it for production
import './styles/main.scss'

import shoppingReducers from './reducers'
let store = createStore(shoppingReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'))
