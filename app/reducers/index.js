import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { includes, indexOf } from 'lodash'
import data from '../data/data.json'
import * as types from '../actions/types'

const { products } = data
// import _ from 'lodash'

const initialState = {
	// products: products.slice(0, 20),
	products: products,
	cartItems: [ ],
	cartTotal: 0,
	action: ''
}

const amaro = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TO_CART:
			let product = products[action.id]
			let items = state.cartItems
			let index = indexOf(items, product)
			let amount = action.amount

			if (index === -1) {
				product.amount = amount
				items.push(products[action.id])
			} else {
				items[index].amount += amount
			}

			return {
				...state,
				cartItems: [].concat(items)
			}

		default:
			return state
	}
}


const rootReducer = combineReducers({
	amaro,
	routing
})

export default rootReducer