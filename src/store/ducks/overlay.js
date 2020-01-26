export const Types = {
  ACTIVE: '@overlay/ACTIVE',
  INACTIVE: '@overlay/INACTIVE',
};

const INITIAL_STATE = false;

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ACTIVE:
      return action.payload;

    case Types.INACTIVE:
      return action.payload;

    default:
      return state;
  }
}

export const Creators = {
  activeOverlay: active => ({
    type: Types.ACTIVE,
    payload: {
      active,
    },
  }),
  inactiveOverlay: inative => ({
    type: Types.INACTIVE,
    payload: {
      inative,
    },
  }),
};
