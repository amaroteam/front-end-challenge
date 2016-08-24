import expect from 'expect';

import * as app from 'actions/app';
import { ActionTypes } from 'constants/index';

describe('app', () => {
  describe('goTo', () => {
    it('should create an action to navigate with react-router > UPDATE_PATH', () => {
      expect([app.goTo('/destination')])
        .toInclude('/destination', (a, b) => a.payload.args[0].pathname === b);
    });
  });

  describe('showAlert', () => {
    it('should create an action to display an alert', () => {
      const expectedAction = {
        type: ActionTypes.SHOW_ALERT,
        status: 'success',
        message: 'Alright!',
        withTimeout: false
      };

      expect(app.showAlert('success', 'Alright!', false)).toEqual(expectedAction);
    });
  });

  describe('hideAlert', () => {
    it('should create an action to hide an alert', () => {
      const expectedAction = {
        type: ActionTypes.HIDE_ALERT
      };

      expect(app.hideAlert()).toEqual(expectedAction);
    });
  });
});
