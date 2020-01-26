export const Types = {
  TOGGLE: '@overlay/TOGGLE',
};

const INITIAL_STATE = false;

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === Types.TOGGLE) {
    return action.payload;
  }
  return state;
}

export const Creators = {
  toggleOverlay: boolean => ({
    type: Types.TOGGLE,
    payload: boolean,
  }),
};
