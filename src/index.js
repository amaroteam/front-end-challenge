import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import RouteError from './components/RouteError'
import CartPage from './components/CartPage'
import Home from './containers/Home'

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger
  )
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/carrinho" component={CartPage} />
      <Route path="*" component={RouteError} />
    </Router>
  </Provider>,
  document.getElementById('content')
)