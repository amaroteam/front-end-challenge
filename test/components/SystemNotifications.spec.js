import React from 'react';
import expect, { spyOn } from 'expect';
import { mount } from 'enzyme';

import { appState } from 'reducers/app';
import SystemNotifications from 'components/SystemNotifications';

function setup(app = appState) {
  const props = {
    app,
    dispatch: () => {}
  };

  return mount(<SystemNotifications {...props} />);
}

describe('SystemNotifications', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly with the default state', () => {
    const icon = wrapper.find('i');
    const message = wrapper.find('.app__notifications__message');

    expect(icon.props().className).toBe(undefined);
    expect(message.text()).toBe('');
  });

  it('should render properly with a success message', () => {
    wrapper.setProps({
      app: {
        ...appState,
        notifications: {
          status: 'success',
          message: 'Hello',
          visible: true,
          withTimeout: true
        }
      }
    });

    const body = wrapper.find('.app__notifications');
    const icon = wrapper.find('i');
    const message = wrapper.find('.app__notifications__message');

    expect(body.hasClass('success') && body.hasClass('active')).toBe(true);
    expect(icon.hasClass('i-thumbs-up')).toBe(true);
    expect(message.text()).toBe('Hello');
  });

  it('should render properly with an error message', () => {
    wrapper.setProps({
      app: {
        ...appState,
        notifications: {
          status: 'error',
          message: 'Fail',
          visible: true,
          withTimeout: false
        }
      }
    });

    const body = wrapper.find('.app__notifications');
    const icon = wrapper.find('i');
    const message = wrapper.find('.app__notifications__message');

    expect(body.hasClass('error') && body.hasClass('active')).toBe(true);
    expect(icon.hasClass('i-thumbs-down')).toBe(true);
    expect(message.text()).toBe('Fail');
  });

  it('should handle clicks', () => {
    const body = wrapper.find('.app__notifications');
    const onClick = spyOn(SystemNotifications.prototype, 'onClick').andCall(() => {
      wrapper.setProps({
        app: {
          ...appState,
          notifications: {
            status: 'error',
            message: 'Fail',
            visible: false,
            withTimeout: false
          }
        }
      });
    });

    body.simulate('click');
    expect(onClick).toHaveBeenCalled();
    expect(body.hasClass('active')).toBe(false);
  });
});
