import expect, { spyOn } from 'expect';
import React from 'react';
import { mount } from 'enzyme';

import Header from 'components/Header';

const onClickLogo = spyOn(Header.prototype, 'onClickLogo');
const onClickCart = spyOn(Header.prototype, 'onClickCart');

function setup() {
  const props = {
    cart: {
      items: [
        { id: 1 }
      ]
    },
    dispatch: () => {},
    location: {
      pathname: '/'
    }
  };

  return mount(<Header {...props} />);
}

describe('Header', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__header').length).toBe(1);
    expect(wrapper.find('.app__header__logo').length).toBe(1);
  });

  it('should render the cart', () => {
    expect(wrapper.find('.app__header__cart').length).toBe(1);
    expect(wrapper.find('.app__header__cart span').text()).toBe('1');
  });

  it('should handle clicks', () => {
    wrapper.find('.app__header__logo').simulate('click');
    expect(onClickLogo).toHaveBeenCalled();

    wrapper.find('.app__header__cart').simulate('click');
    expect(onClickCart).toHaveBeenCalled();
  });
});
