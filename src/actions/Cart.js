import alt from '../alt.js';

@alt.createActions
export default class CartActions {
	get() {
		return dispatch => {
			const items = sessionStorage.getItem('cart') || '';
			dispatch(items.split('|').filter(item => item));
		}
	}

	remove(id) {
		id += '';
		return dispatch => {
			let items = sessionStorage.getItem('cart') || '';
			items = items.split('|').filter(item => item && item !== id);
			sessionStorage.setItem('cart', items.join('|'));

			dispatch(items);
		};
	}

	add(id) {
		id += '';
		return dispatch => {
			let items = sessionStorage.getItem('cart') || '';
			items = items.split('|').filter(item => item && item !== id);
			items.push(id);
			sessionStorage.setItem('cart', items.join('|'));
			dispatch(items);
		}
	}
}