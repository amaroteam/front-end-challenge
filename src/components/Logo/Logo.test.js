import React from 'react';
import { mount } from 'enzyme';

import Logo from '.';

describe('<Logo />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<Logo />);
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
