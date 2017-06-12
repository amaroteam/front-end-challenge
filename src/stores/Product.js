import alt from '../alt';
import ProductActions from '../actions/Product.js';

@alt.createStore
export default class ProductStore {
	constructor() {
		this.bindListeners({
			get: ProductActions.get
		});
	}

	get(payload) {
		if(payload && payload.products)
			this.allProducts = payload.products;
		else
			this.error = 'Products not found';
	}
}