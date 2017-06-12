import alt from '../alt';
import CartActions from '../actions/Cart.js';

@alt.createStore
export default class CartStore {
	constructor() {
		this.bindListeners({
			items: [CartActions.GET, CartActions.ADD, CartActions.REMOVE]
		});
	}

	items(payload) {
		this.products = payload;
	}

} 