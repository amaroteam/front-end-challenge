import * as types from './types'

export function filterTable(filter) {
	return {
		type: types.FILTER,
		filter
	}
}

export function getProduct(style) {
	return {
		type: types.GET_PRODUCT,
		style
	}
}

export function getProductList() {
	return {
		type: types.GET_PRODUCT_LIST
	}
}

export function addToCart(style) {
	return {
		type: types.ADD_TO_CART,
		style
	}
}

export function getProductList(style, amount) {
	return {
		type: types.REMOVE_FROM_CART,
		style,
		amount
	}
}

export function getCartItems() {
	return {
		type: types.GET_CART_ITEMS
	}
}

export function getProductList(discount = 0) {
	return {
		type: types.GET_PRODUCT_LIST,
		discount
	}
}