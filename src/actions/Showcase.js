import alt from '../alt.js';

@alt.createActions
export default class ShowcaseActions {
	getProducts() {
		return dispatch => {
			fetch('products.json')
				.then(req => req.json())
				.then(result => dispatch(result));
		}
	}
} 