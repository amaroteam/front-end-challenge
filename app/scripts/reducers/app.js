import { REHYDRATE } from 'redux-persist/constants';
import { createReducer } from 'utils/helpers';

import { ActionTypes } from 'constants/index';
import config from 'config';

export const appState = {
  notifications: {
    visible: false,
    message: '',
    status: '',
    withTimeout: true
  },
  rehydrated: false
};

export default {
  app: createReducer(appState, {
    [REHYDRATE](state, action) {
      if (action.payload.app && action.payload.app.storageVersion === config.storageVersion) {
        return Object.assign({}, state, action.payload.app, {
          notifications: appState.notifications,
          rehydrated: true
        });
      }

      return { ...state };
    },
    [ActionTypes.SHOW_ALERT](state, action) {
      const notifications = {
        ...state.notifications,
        visible: true,
        message: action.message,
        status: action.status,
        withTimeout: action.withTimeout !== undefined || true
      };
      return Object.assign({}, state, { notifications });
    },
    [ActionTypes.HIDE_ALERT](state) {
      const notifications = {
        ...state.notifications,
        visible: false,
        withTimeout: true
      };
      return Object.assign({}, state, { notifications });
    }
  })
};
