import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import App from './components/App'

import './styles/app.css'

import { fetchProducts } from './actions/productsActions'

store.dispatch(fetchProducts())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
