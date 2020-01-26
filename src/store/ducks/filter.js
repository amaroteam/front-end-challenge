export const Types = {
  TOGGLE_FILTER: '@filter/TOGGLE_FILTER',
  FILTER_SELECTED: '@filter/FILTER_SELECTED',
};

const INITIAL_STATE = {
  toggle: false,
  selected: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_FILTER:
      return {
        ...state,
        toggle: action.payload,
      };

    case Types.FILTER_SELECTED:
      return action.payload;
    default:
      return {
        ...state,
        selected: action.payload,
      };
  }
}

export const Creators = {
  toggleFilter: boolean => ({
    type: Types.TOGGLE_FILTER,
    payload: boolean,
  }),
  filterSelected: text => ({
    type: Types.FILTER_SELECTED,
    payload: text,
  }),
};
