import React from 'react';
import { shallow } from 'enzyme';
import ProductsPrices from './ProductsPrices';

test('expect to render ProductsPrices component', () => {
  const mockPrices = {
    on_sale: false,
    regular_price: 'R$ 199,90',
    actual_price: 'R$ 199,90',
    discount_percentage: '',
  };

  expect(
    shallow(
      <ProductsPrices
        on_sale={mockPrices.on_sale}
        regular_price={mockPrices.regular_price}
        actual_price={mockPrices.actual_price}
        discount_percentage={mockPrices.discount_percentage}
      />
    )
  ).toHaveLength(1);
});
