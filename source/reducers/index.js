import * as ActionType from '../actions/actionTypes';

const appReducer = (state = [], action) => {
    switch (action.type) {
		case ActionType.UPDATE_CART:
            return {
				cart: action.cart
			};

        default:
            return state;
    }
};

export default appReducer;
