import { getProduct } from './products';

const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

const initialState = {
    items: [],
    currency: 'R$'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}

function handleCartRemove(state, payload) {
    
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function getQuantityItemsInCart(state) {
    return state.cart.items.length;
}

export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getTotal(state, props) {
    let newValue = 0;
    let oldValue = 0;
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        let currentValue = item.actual_price.replace(/\D/g, '').replace(/^0+/, '').substring(0, 11)
        newValue += oldValue;
        oldValue = parseInt(currentValue, 10);
        return newValue + parseInt(currentValue, 10);
    }, 0);
}

export function applyCurrencyMask(value) {
    value = value.toString();
    value = value.replace(/(\d{1})(\d{8})$/, '$1.$2');
    value = value.replace(/(\d{1})(\d{5})$/, '$1.$2');
    return value.replace(/(\d{1})(\d{1,2})$/, '$1,$2'); 
}
