import React from 'react';
import { mount } from 'enzyme';

import Nav from '.';
import { WithStore, WithRouter } from '../../utils/testing';

describe('<Nav />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(
        <WithStore>
          <WithRouter>
            <Nav />
          </WithRouter>
        </WithStore>
      );
    });

    it('shoud match snapshot with default props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
