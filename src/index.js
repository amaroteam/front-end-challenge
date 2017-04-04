import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import shopApp from './reducers'
import App from './components/App'

const STATE = {
  products: [
    {
        "name": "VESTIDO TRANSPASSE BOW",
        "on_sale": false,
        "regular_price": "R$ 199,90",
        "actual_price": "R$ 199,90",
        "installments": "3x R$ 66,63",
        "image": "https://d2odcms9up7saa.cloudfront.net/appdata/images/products/20002605_615_catalog_1.jpg?1460136912",
        "sizes": [{
          "available": false,
          "size": "PP",
          "sku": "5807_343_0_PP"
        }, {
          "available": true,
          "size": "P",
          "sku": "5807_343_0_P"
        }]
      }
  ]
}

let store = createStore(
  shopApp,
  STATE,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#container')
)