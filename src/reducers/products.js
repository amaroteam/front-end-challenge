import types from '../constants/products';

const initialState = {
    items: [],
};

const reducer = {
    [types.GET_PRODUCTS_SUCCESS] : (state, action) => {
        return {
            ...state,
            items: action.payload,
        };
    }
};

export default function (state = initialState, action) {
    const fn = reducer[action.type];

    return fn ? fn(state, action) : state;
};