/**
 *
 * Action builder
 *
 */

import * as types from './types'

export function addToCart(id, amount, size) {
	return {
		type: types.ADD_TO_CART,
		id, // Product ID
		amount, // Amount of the same product to be added
		size // Size of the selected product
	}
}

export function removeFromCart(id, amount, size) {
	return {
		type: types.REMOVE_FROM_CART,
		id, // Product ID
		amount, // Amount of the same product to be removed
		size // Size of the selected product
	}
}