import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import shopApp from './reducers'
import RouteError from './components/RouteError'
import Home from './components/Home'
import Cart from './containers/Cart'

import STATE from '../products'

let store = createStore(
  shopApp,
  STATE,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/carrinho" component={Cart} />
      <Route path="*" component={RouteError} />
    </Router>
  </Provider>,
  document.getElementById('content')
)