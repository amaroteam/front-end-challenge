import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';

test('expect to render ProductsList component', () => {
  const mockProducts = { products: [], isOnSale: false };

  expect(
    shallow(
      <ProductsList
        products={mockProducts.products}
        isOnSale={mockProducts.isOnSale}
      />
    )
  ).toHaveLength(1);
});
