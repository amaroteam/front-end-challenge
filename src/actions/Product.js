import alt from '../alt.js';

@alt.createActions
export default class ProductActions {
	get() {
		return dispatch => {
			fetch('products.json')
				.then(req => req.json())
				.then(dispatch);
		}
	}
}