import React from 'react';
import { shallow } from 'enzyme';
import ProductsFilter from './ProductsFilter';

test('expect to render ProductsFilter component', () => {
  const mockFilter = {
    isOnSale: false,
    onClick: () => {},
  };

  expect(
    shallow(
      <ProductsFilter
        isOnSale={mockFilter.isOnSale}
        onClick={mockFilter.onClick}
      />
    )
  ).toHaveLength(1);
});
