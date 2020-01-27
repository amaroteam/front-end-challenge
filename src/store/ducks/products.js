/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
import api from '../../service/api';
import priceToNumber from '../../utils/priceToNumber';

export const Types = {
  initGetProducts: '@product/INIT_GET_PRODUCTS',
  successGetProducts: '@product/SUCCESS_GET_PRODUCTS',
  errorGetProducts: '@product/ERROR_GET_PRODUCTS',

  productOrderByBestPrice: '@product/BEST_PRICE',
  productOrderByBiggestPrice: '@product/BIGGEST_PRICE',
  productOrderByDiscount: '@product/DISCOUNT',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  changed: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.initGetProducts:
      return {
        data: [],
        loading: true,
        error: false,
        changed: '',
      };
    case Types.successGetProducts:
      return {
        data: action.data,
        loading: false,
        error: false,
        changed: '',
      };
    case Types.errorGetProducts:
      return {
        data: [],
        loading: false,
        error: true,
        changed: '',
      };

    case Types.productOrderByBestPrice:
      const orderByBestPrice = state.data.sort(
        (a, b) =>
          priceToNumber(a.actual_price) -
          priceToNumber(b.actual_price),
      );
      return {
        ...state,
        data: orderByBestPrice,
        changed: 'BEST_PRICE',
      };

    case Types.productOrderByBiggestPrice:
      const orderBiggestPrice = state.data.sort(
        (a, b) =>
          priceToNumber(b.actual_price) -
          priceToNumber(a.actual_price),
      );
      return {
        ...state,
        data: orderBiggestPrice,
        changed: 'BIGGEST_PRICE',
      };

    case Types.productOrderByDiscount:
      const orderByDiscount = state.data.sort(
        (a, b) =>
          priceToNumber(b.discount_percentage) -
          priceToNumber(a.discount_percentage),
      );
      return {
        ...state,
        data: orderByDiscount,
        changed: 'BEST_DISCOUNT',
      };
    default:
      return state;
  }
}

export const Creators = {
  initGetProducts: () => ({
    type: Types.initGetProducts,
    loading: true,
    error: false,
  }),

  successGetProducts: data => ({
    type: Types.successGetProducts,
    data,
    loading: false,
    error: false,
  }),

  errorGetProducts: () => ({
    type: Types.errorGetProducts,
    loading: false,
    error: true,
  }),

  getProducts: () => {
    return async dispatch => {
      dispatch(Creators.initGetProducts());
      try {
        const response = await api.get('/products');
        const { data } = response;
        return dispatch(Creators.successGetProducts(data));
      } catch (error) {
        return dispatch(Creators.errorGetProducts());
      }
    };
  },

  orderByBestPrice: () => ({
    type: Types.productOrderByBestPrice,
  }),

  orderByBiggestPrice: () => ({
    type: Types.productOrderByBiggestPrice,
  }),

  orderByDiscount: () => ({
    type: Types.productOrderByDiscount,
  }),
};
