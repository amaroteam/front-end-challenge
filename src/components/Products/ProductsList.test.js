import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';

test('expect to render ProductsList component', () => {
  const mockProducts = [];

  expect(shallow(<ProductsList products={mockProducts} />)).toHaveLength(1);
});
