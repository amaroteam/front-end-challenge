import { Creators as ProductsCreator } from './products';
import { Creators as ProductCreator } from './product';
import { Creators as CartCreator } from './cart';
import { Creators as SearchCreator } from './search';
import { Creators as DrawerCreator } from './drawer';
import {
  removeItemBySlug,
  findIndexBySlug,
  groupItemsBySlug,
  searchByTerms,
} from '../../utils/productHandler';

import api from '../../services/api';

const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
} = ProductsCreator;

const {
  loadProductStart,
  loadProductSuccess,
  loadProductError,
  clearProduct,
  addSize,
} = ProductCreator;

const {
  addToCart,
  removeFromCart,
  checkSizes,
  dismissSizeWarning,
} = CartCreator;

const { search } = SearchCreator;
const { dismissDrawer } = DrawerCreator;

export const fetchProductsThunk = () => (
  async (dispatch) => {
    await dispatch(fetchProductsStart());

    return api.getProducts()
      .then((response) => {
        dispatch(fetchProductsSuccess(response));
        return response;
      })
      .catch(error => dispatch(fetchProductsError(error)));
  }
);

export const loadProductThunk = pathname => (
  async (dispatch) => {
    await dispatch(loadProductStart());

    return api.getProductByPathname(pathname)
      .then((response) => {
        dispatch(dismissDrawer());
        dispatch(loadProductSuccess(response));
        return response;
      })
      .catch(error => dispatch(loadProductError(error)));
  }
);

export const sizeSelectorThunk = (event, sku) => {
  event.preventDefault();
  return dispatch => dispatch(addSize(sku));
};

export const addToCartThunk = (event, selectedSize) => {
  event.preventDefault();

  return async (dispatch, getState) => {
    const selectedProduct = getState().single.product;

    if (selectedSize === '') {
      return dispatch(checkSizes('mensagem de erro'));
    }

    return dispatch(addToCart({
      ...selectedProduct,
      selectedSize,
    }));
  };
};

export const clearProductThunk = () => (
  async (dispatch) => {
    await dispatch(clearProduct());
    return dispatch(dismissSizeWarning());
  }
);

export const addQuantityThunk = (event, currentProduct) => {
  event.preventDefault();
  return dispatch => dispatch(addToCart({ ...currentProduct }));
};

export const removeQuantityThunk = (event, itemName) => {
  event.preventDefault();

  return async (dispatch, getState) => {
    const cartItems = getState().cart.items;
    const itemIndex = findIndexBySlug(itemName, cartItems);
    const groupedItems = groupItemsBySlug(itemName, cartItems);

    if (groupedItems.length > 1) {
      cartItems.splice(itemIndex, 1);
      return dispatch(removeFromCart(cartItems));
    }

    return false;
  };
};

export const removeItemThunk = (event, itemName) => {
  event.preventDefault();

  return async (dispatch, getState) => {
    const cartItems = getState().cart.items;
    const itemToRemove = removeItemBySlug(itemName, cartItems);
    return dispatch(removeFromCart(itemToRemove));
  };
};

export const searchThunk = (event) => {
  const searchTerm = event.target.value;

  return (dispatch, getState) => {
    if (searchTerm.length < 3) {
      return dispatch(search([]));
    }

    const catalog = getState().catalog.products;
    const itemsFound = searchByTerms(searchTerm, catalog);

    return dispatch(search([...itemsFound]));
  };
};
