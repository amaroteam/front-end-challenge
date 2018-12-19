import React from 'react';
import { shallow } from 'enzyme';
import Basket from './Basket';

test('expect to render Basket component', () => {
  const mockBasket = [];

  expect(shallow(<Basket basket={mockBasket} />)).toHaveLength(1);
});
