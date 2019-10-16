import React from 'react';
import { mount } from 'enzyme';

import CartProduct from '.';
import mock from './mock';

describe('<CartProduct />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<CartProduct {...mock} />);
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
