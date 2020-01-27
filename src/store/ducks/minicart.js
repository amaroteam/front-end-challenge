export const Types = {
  ADD: '@minicart/ADD_PRODUCT',
  REMOVE: '@minicart/REMOVE_PRODUCT',
  UPDATE: '@minicart/UPDATE_MINICART',
};

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE:
      return {
        ...state,
        toggle: action.payload,
      };
    case Types.TOOLBAR:
      return {
        ...state,
        toolbar: action.payload,
      };

    default:
      return state;
  }
}
