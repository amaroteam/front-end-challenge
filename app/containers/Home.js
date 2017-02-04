import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'
import Cart from '../components/Cart'
import ProductList from '../components/ProductList'

@connect(state => ({
	products: state.amaro.products,
	cartItems: state.amaro.cartItems,
	cartTotal: state.amaro.cartTotal,
	isOpen: state.amaro.isOpen
}))

export default class Home extends Component {
	static propTypes = {
		products: PropTypes.array
	}

	render() {
		const { products, cartItems, cartTotal, isOpen, dispatch } = this.props
		const actions = bindActionCreators(allActions, dispatch)

		return <div>
			<Cart
				cartItems={ cartItems }
				removeFromCart={ actions.removeFromCart }
				isOpen={ isOpen }
				cartTotal={ cartTotal }
			/>
			<ProductList products={ products } addToCart={ actions.addToCart }/>
		</div>
	}
}