import React from 'react';
import { mount } from 'enzyme';

import Modal from '.';
import { WithStore } from '../../utils/testing';

describe('<Modal />', () => {
  describe('with default props', () => {
    it('shoud match snapshot with default props', () => {
      const wrapper = mount(
        <WithStore>
          <Modal>
            <div>test</div>
          </Modal>
        </WithStore>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
