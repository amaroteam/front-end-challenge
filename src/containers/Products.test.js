import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';

test('expect to render Products component', () => {
  const mockProducts = [];

  expect(shallow(<Products products={mockProducts} />)).toHaveLength(1);
});
