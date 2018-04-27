import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './containers/app'
import CssBaseline from 'material-ui/CssBaseline'

const store = createStore(rootReducer)

ReactDOM.render((
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </Provider>
), document.getElementById('app'))
