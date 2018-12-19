import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';

test('expect to render ProductsList component', () => {
  const mockProducts = { products: [] };

  expect(
    shallow(<ProductsList products={mockProducts.products} />)
  ).toHaveLength(1);
});
