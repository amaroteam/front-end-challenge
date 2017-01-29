import * as types from './types'

export function addToCart(id, amount) {
	return {
		type: types.ADD_TO_CART,
		id,
		amount
	}
}

export function removeFromCart(id, amount) {
	return {
		type: types.REMOVE_FROM_CART,
		id,
		amount
	}
}