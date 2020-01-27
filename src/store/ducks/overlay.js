export const Types = {
  TOGGLE: '@overlay/TOGGLE',
  TOOLBAR: '@overlay/TOOLBAR',
};

const INITIAL_STATE = {
  toggle: false,
  toolbar: false,
};

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

export const Creators = {
  toggleOverlay: boolean => ({
    type: Types.TOGGLE,
    payload: boolean,
  }),

  overlayToolBar: boolean => ({
    type: Types.TOOLBAR,
    payload: boolean,
  }),
};
