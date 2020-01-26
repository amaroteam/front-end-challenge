export const Types = {
  TOGGLE_FILTER: '@filter/TOGGLE_FILTER',
};

const INITIAL_STATE = false;

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === Types.TOGGLE_FILTER) {
    return action.payload;
  }
  return state;
}

export const Creators = {
  toggleFilter: boolean => ({
    type: Types.TOGGLE_FILTER,
    payload: boolean,
  }),
};
