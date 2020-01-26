export const Types = {
  initGetProducts: '@product/INIT_GET_PRODUCTS',
  successGetProducts: '@product/SUCCESS_GET_PRODUCTS',
  errorGetProducts: '@product/ERROR_GET_PRODUCTS',
};

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INIT_GET_USERS':
      return {
        users: [],
        loading: true,
        error: false,
      };
    case 'SUCCESS_GET_USERS':
      return {
        users: action.users,
        loading: false,
        error: false,
      };
    case 'ERROR_GET_USERS':
      return {
        users: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
