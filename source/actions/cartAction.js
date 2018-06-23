import * as ActionType from './actionTypes';

export function UpdateCart (product) {
	return {
		type: ActionType.UPDATE_CART,
		cart: product
	};
}
