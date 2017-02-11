import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'

import Home from './Components/Home'

import './Stylus/main.styl'

var intlData = {
  "locales": "pt-BR"
};

ReactDOM.render(
  <IntlProvider locale={'en'}>
    <Home {...intlData} />
  </IntlProvider>,
  document.getElementById('app')
)
