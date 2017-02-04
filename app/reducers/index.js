/**
 *
 * Reducers definition
 *
 */

import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { includes, indexOf } from 'lodash'
import data from '../data/data.json'
import * as types from '../actions/types'

const { products } = data

/* Initial state */
const initialState = {
	products: products,
	cartItems: [ ],
	cartLength: 0,
	cartTotal: 0,
	action: '',
	isOpen: false
}

const amaro = (state = initialState, action) => {
	switch (action.type) {
		/*===========================================
		=            Add to cart reducer            =
		===========================================*/
		case types.ADD_TO_CART:
			// TODO: Add selected size to cart items and refactor
			let product = Object.assign(products[action.id], { })
			let items = state.cartItems
			let index = indexOf(items, product)
			let amount = action.amount
			let cartTotal = parseFloat(state.cartTotal)
			let cartLength =  state.cartLength
			let rgxp = /(?:R\$)\ ([0-9]+),([0-9]+)/
			let priceMatch = product.actual_price.match(rgxp)
			let price = parseFloat(priceMatch[1] + '.' + priceMatch[2])
			let total = cartTotal + (price * amount)
			total = total.toFixed(2)

			if (index === -1) {
				product.amount = amount
				items.push(products[action.id])
			} else {
				items[index].amount += amount
			}

			return {
				...state,
				cartItems: [].concat(items),
				cartLength: cartLength + amount,
				cartTotal: total
			}

		/*===========================================
		=            Toggle cart reducer           =
		===========================================*/
		case types.TOGGLE_CART:
			let isOpen = state.isOpen

			return {
				...state,
				isOpen: !isOpen
			}

		/*===========================================
		=            Remove from cart reducer       =
		===========================================*/
		case types.REMOVE_FROM_CART:
			let _items = state.cartItems
			let _product = Object.assign(_items[action.id], { })
			_items.splice(action.id, 1)
			let _cartTotal = parseFloat(state.cartTotal)
			let _cartLength =  state.cartLength
			let _rgxp = /(?:R\$)\ ([0-9]+),([0-9]+)/
			let _priceMatch = _product.actual_price.match(_rgxp)
			let _price = parseFloat(_priceMatch[1] + '.' + _priceMatch[2])
			let _total = _cartTotal - (_price * _product.amount)
			_total = _total.toFixed(2)

			return {
				...state,
				cartItems: _items,
				cartLength: _cartLength - _product.amount,
				cartTotal: _total
			}

			return {
				...state,
				isOpen: !isOpen
			}
		
		/*===============================================================
		=            Default case. Returns the initial store            =
		===============================================================*/
		default:
			return state		
	}
}


const rootReducer = combineReducers({
	amaro,
	routing
})

export default rootReducer