import React from 'react';
import { shallow } from 'enzyme';
import ProductsDetails from './ProductsDetails';

test('expect to render ProductsDetails component', () => {
  const mockProducts = [];

  expect(shallow(<ProductsDetails products={mockProducts} />)).toHaveLength(1);
});
