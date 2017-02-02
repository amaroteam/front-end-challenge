import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'
import Cart from '../components/Cart'
import ProductList from '../components/ProductList'

@connect(state => ({
	products: state.amaro.products,
	cartItems: state.amaro.cartItems
}))

export default class Home extends Component {
	static propTypes = {
		products: PropTypes.array
	}

	render() {
		const { products, cartItems, dispatch } = this.props
		const actions = bindActionCreators(allActions, dispatch)

		return <div>
			<Cart cartItems={ cartItems } actions={ actions }/>
			<ProductList products={ products } addToCart={ actions.addToCart }/>
		</div>
	}
}