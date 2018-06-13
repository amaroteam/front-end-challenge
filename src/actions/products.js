import types from '../constants/products';
import { fetchProducts } from '../api';

const getProductsSuccess = payload => ({
    type: types.GET_PRODUCTS_SUCCESS,
    payload,
});

const getProductsError = () => ({
    type: types.GET_PRODUCTS_ERROR,
});

const getProductsTry = () => ({
    type: types.GET_PRODUCTS,
})

export const getProducts = () =>
    dispatch => {
        dispatch(getProductsTry());

        return fetchProducts()
            .then(response => dispatch(getProductsSuccess(response)))
            .catch(() => dispatch(getProductsError()));
    };