import * as ActionType from './actionTypes';

export function AddToCart (product) {
	return {
		type: ActionType.ADD_TO_CART,
		cart: product
	};
}
