import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import ProductList from './containers/ProductList'
import ProductPage from './containers/ProductPage'

export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ ProductList } />
		<Route path="/product" component={ ProductPage } />
	</Route>
)