// TODO: finish product page markup and styling
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'
import Cart from '../components/Cart'
import SingleProduct from '../components/SingleProduct'

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
		const id = this.props.params.productId

		return <div>
			<Cart cartItems={ cartItems } actions={ actions }/>
			<SingleProduct product={ products[id] } addToCart={ actions.addToCart } id={ id }/>
		</div>
	}
}