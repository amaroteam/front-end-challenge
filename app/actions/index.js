/**
 *
 * Action builder
 *
 */

import * as types from './types'

export function toggleCart() {
	return {
		type: types.TOGGLE_CART
	}
}

export function addToCart(id, amount, size) {
	return {
		type: types.ADD_TO_CART,
		id, // Product ID
		amount, // Amount of the same product to be added
		size // Size of the selected product
	}
}

export function removeFromCart(id, amount) {
	return {
		type: types.REMOVE_FROM_CART,
		id, // Product ID
		amount // Amount of the same product to be removed
	}
}

export function filterBy(filter) {
	return {
		type: types.FILTER_BY,
		filter // Type of filter (sale or all)
	}
}