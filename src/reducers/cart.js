import types from '../constants/cart';

const initialState = {
    items: [],
    count: 0,
    total: 0,
};

const convertValues = cart => {
    let sum = cart.reduce((prev, next) => {
        const value = next.price.replace('R$ ', '').split('.').join('').split(',').join('.');
        return prev + Number(value);
    }, 0);

    sum = sum.toFixed(2).split('.');
    sum[0] = "R$ " + sum[0].split(/(?=(?:...)*$)/).join('.');

    return sum.join(',');
}

const reducer = {
    [types.ADD_ITEM_SUCCESS] : (state, action) => {
        return {
            ...state,
            items: action.payload,
            count: action.payload.reduce((prev, next) => prev + next.quantity, 0),
            total: convertValues(action.payload),
        };
    },
    [types.GET_ITEMS] : (state, action) => {
        return {
            ...state,
            items: action.payload,
            count: action.payload.reduce((prev, next) => prev + next.quantity, 0),
            total: convertValues(action.payload),
        };
    }
};

export default function (state = initialState, action) {
    const fn = reducer[action.type];

    return fn ? fn(state, action) : state;
};