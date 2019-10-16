import React from 'react';
import { mount } from 'enzyme';

import DetailedProduct from '.';
import mock from './mock';

describe('<DetailedProduct />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<DetailedProduct {...mock} />);
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
