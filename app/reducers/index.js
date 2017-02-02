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
	action: ''
}

const amaro = (state = initialState, action) => {
	switch (action.type) {
		/*===========================================
		=            Add to cart reducer            =
		===========================================*/
		case types.ADD_TO_CART:
			// TODO: Add selected size to cart items
			let product = Object.assign(products[action.id], { })
			let items = state.cartItems
			let index = indexOf(items, product)
			let amount = action.amount
			let cartLength =  state.cartLength

			if (index === -1) {
				product.amount = amount
				items.push(products[action.id])
			} else {
				items[index].amount += amount
			}

			return {
				...state,
				cartItems: [].concat(items),
				cartLength: cartLength + amount
			}

		/*=====  End of Add to cart reducer  ======*/
		
		/*===============================================================
		=            Default case. Returns the initial store            =
		===============================================================*/
		default:
			return state

		/*=====  End of Default case. Returns the initial store  ======*/
		
	}
}


const rootReducer = combineReducers({
	amaro,
	routing
})

export default rootReducer