import api from '../../service/api';

export const Types = {
  initGetProducts: '@product/INIT_GET_PRODUCTS',
  successGetProducts: '@product/SUCCESS_GET_PRODUCTS',
  errorGetProducts: '@product/ERROR_GET_PRODUCTS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.initGetProducts:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case Types.successGetProducts:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case Types.errorGetProducts:
      return {
        data: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

// export const Creators = {
//   toggleFilter: boolean => ({
//     type: Types.TOGGLE_FILTER,
//     payload: boolean,
//   }),
//   filterOption: option => ({
//     type: Types.FILTER_OPTION,
//     payload: option,
//   }),
// };

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
};
