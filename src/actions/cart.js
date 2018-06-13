import types from '../constants/cart';
import { addItemToCart, getCart } from '../api';

const addCartSuccess = payload => ({
    type: types.ADD_ITEM_SUCCESS,
    payload,
});

const addCartError = () => ({
    type: types.ADD_ITEM_ERROR,
});

const addCartTry = () => ({
    type: types.ADD_ITEM,
})

export const addItem = (product, sku) =>
    dispatch => {
        dispatch(addCartTry())

        return addItemToCart(product, sku)
            .then(response => dispatch(addCartSuccess(response)))
            .catch(() => dispatch(addCartError()));
    };

export const getCartItems = () => ({
    type: types.GET_ITEMS,
    payload: getCart(),
});
