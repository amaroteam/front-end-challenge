export const Types = {
  QUICK_VIEW: '@quickView/PRODUCT_QUICK_VIEW',
  TOGGLE_QUICK_VIEW: '@quickView/TOGGLE_SHOW',
  PRODUCT_SIZE: '@quickView/PRODUCT_SIZE',
  SIZE_ERROR: '@quickView/SIZE_ERROR',
};

const INITIAL_STATE = {
  data: [],
  size: '',
  toggle: false,
  errorSize: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.QUICK_VIEW:
      return {
        ...state,
        data: action.quickView,
      };

    case Types.TOGGLE_QUICK_VIEW:
      return {
        ...state,
        toggle: action.payload,
      };

    case Types.PRODUCT_SIZE: {
      return {
        ...state,
        size: action.payload,
      };
    }
    case Types.SIZE_ERROR: {
      return {
        ...state,
        sizeError: action.payload,
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  productQuickView: product => ({
    type: Types.QUICK_VIEW,
    quickView: product,
  }),
  toggleQuickView: boolean => ({
    type: Types.TOGGLE_QUICK_VIEW,
    payload: boolean,
  }),
  sizeProductQuickView: size => ({
    type: Types.PRODUCT_SIZE,
    payload: size,
  }),
  errorSizeBullets: boolean => ({
    type: Types.SIZE_ERROR,
    payload: boolean,
  }),
};
