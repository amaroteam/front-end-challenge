import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'
import Cart from '../components/Cart'
import ProductFilter from '../components/ProductFilter'
import ProductList from '../components/ProductList'

@connect(state => ({
	products: state.amaro.products,
	cartItems: state.amaro.cartItems,
	cartTotal: state.amaro.cartTotal,
	isOpen: state.amaro.isOpen,
	filter: state.amaro.filter,
}))

export default class Home extends Component {
	static propTypes = {
		products: PropTypes.array,
		cartItems: PropTypes.array,
		cartTotal: PropTypes.number,
		filter: PropTypes.string,
		isOpen: PropTypes.bool,
		dispatch: PropTypes.func
	}

	render() {
		const { products, cartItems, cartTotal, filter, isOpen, dispatch } = this.props
		const actions = bindActionCreators(allActions, dispatch)

		return <div>
			<Cart
				cartItems={ cartItems }
				removeFromCart={ actions.removeFromCart }
				isOpen={ isOpen }
				cartTotal={ cartTotal }
			/>
			<ProductFilter filterBy={ actions.filterBy } filter={ filter }/>
			<ProductList products={ products } addToCart={ actions.addToCart }/>
		</div>
	}
}