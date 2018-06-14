import types from '../constants/products';

const initialState = {
    items: [],
    searchable: [],
};

const reducer = {
    [types.GET_PRODUCTS_SUCCESS] : (state, action) => {
        return {
            ...state,
            items: action.payload,
            searchable: action.payload,
        };
    },
    [types.SEARCH_PRODUCT]: (state, action) => {
        return {
            ...state,
            items: state.searchable.filter(product => product.name.indexOf(action.payload) > -1),
        }
    }
};

export default function (state = initialState, action) {
    const fn = reducer[action.type];

    return fn ? fn(state, action) : state;
};