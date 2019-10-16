import React from 'react';
import { mount } from 'enzyme';

import Icon from '.';

describe('<Icon />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<Icon name='cart' />);
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
