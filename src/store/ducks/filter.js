export const Types = {
  TOGGLE_FILTER: '@filter/TOGGLE_FILTER',
  FILTER_OPTION: '@filter/FILTER_OPTION',
};

const INITIAL_STATE = {
  toggle: false,
  option: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_FILTER:
      return {
        ...state,
        toggle: action.payload,
      };

    case Types.FILTER_OPTION:
      return {
        ...state,
        option: action.payload,
      };
    default:
      return state;
  }
}

export const Creators = {
  toggleFilter: boolean => ({
    type: Types.TOGGLE_FILTER,
    payload: boolean,
  }),
  filterOption: option => ({
    type: Types.FILTER_OPTION,
    payload: option,
  }),
};
