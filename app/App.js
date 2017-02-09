import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'

import Home from './Components/Home'

import './Stylus/main.styl'

ReactDOM.render(
  <IntlProvider locale='en'>
    <Home />
  </IntlProvider>,
  document.getElementById('app')
)
