import React from 'react';
import { mount } from 'enzyme';

import Products from '.';
import { WithStore, WithRouter } from '../../utils/testing';

describe('<Products />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(
        <WithStore>
          <WithRouter>
            <Products />
          </WithRouter>
        </WithStore>
      );
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
