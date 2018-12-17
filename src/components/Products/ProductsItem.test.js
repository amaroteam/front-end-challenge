import React from 'react';
import { shallow } from 'enzyme';
import ProductsItem from './ProductsItem';

test('expect to render ProductsItem component', () => {
  const mockProducts = {
    name: 'VESTIDO TRANSPASSE BOW',
    style: '20002605',
    color: 'TAPEÇARIA',
    on_sale: false,
    regular_price: 'R$ 199,90',
    actual_price: 'R$ 199,90',
    code_color: '20002605_613',
    color_slug: 'tapecaria',
    discount_percentage: '',
    image: 'https://via.placeholder.com/470x594',
  };

  expect(shallow(<ProductsItem product={mockProducts} />)).toHaveLength(1);
});
