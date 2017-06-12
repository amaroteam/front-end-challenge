import alt from '../alt';
import ShowcaseActions from '../actions/Showcase.js';

@alt.createStore
export default class ShowcaseStore {
	constructor() {
		this.bindListeners({
			getProducts: ShowcaseActions.GET_PRODUCTS
		});
	}

	getProducts(payload) {
		if(payload && payload.products)
			this.products = payload.products;
		else
			this.error = 'Products not found';
	}

} 