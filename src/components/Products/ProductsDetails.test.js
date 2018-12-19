import React from 'react';
import { shallow } from 'enzyme';
import ProductsDetails from './ProductsDetails';

test('expect to render ProductsDetails component', () => {
  const mockProducts = {
    products: [],
  };

  expect(
    shallow(<ProductsDetails products={mockProducts.products} />)
  ).toHaveLength(1);
});
