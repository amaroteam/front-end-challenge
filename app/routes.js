/**
 *
 * Definition of app routes
 *
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import ProductPage from './containers/ProductPage'

export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home } />
		<Route path="/product/:productId" component={ ProductPage } />
	</Route>
)