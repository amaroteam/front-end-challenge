import React from 'react';
import { mount } from 'enzyme';

import Product from '.';
import mock from './mock';

describe('<Product />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<Product {...mock} />);
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
