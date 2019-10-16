import React from 'react';
import { mount } from 'enzyme';

import Cart from '.';
import { WithStore, WithRouter } from '../../utils/testing';

describe('<Cart />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(
        <WithStore>
          <WithRouter>
            <Cart />
          </WithRouter>
        </WithStore>
      );
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
