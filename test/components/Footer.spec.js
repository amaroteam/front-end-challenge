import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';

import Footer from 'components/Footer';

describe('Footer', () => {
  const wrapper = mount(<Footer />);

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__footer').length).toBe(1);
  });

  it('should render the social links', () => {
    expect(wrapper.find('.app__footer__social a').length).toBe(6);
  });
});
