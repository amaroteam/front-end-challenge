import * as ActionType from '../actions/actionTypes';

const appReducer = (state = [], action) => {
    switch (action.type) {
		case ActionType.ADD_TO_CART:
            return {
				cart: action.cart
			};

        default:
            return state;
    }
};

export default appReducer;
