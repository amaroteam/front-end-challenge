import React from 'react';
import { shallow } from 'enzyme';
import ProductsImage from './ProductsImage';

test('expect to render ProductsImage component', () => {
  const mockProducts = {
    name: 'VESTIDO TRANSPASSE BOW',
    color: 'TAPEÇARIA',
    image: 'https://via.placeholder.com/470x594',
    isLarge: true,
  };

  expect(
    shallow(
      <ProductsImage
        name={mockProducts.name}
        color={mockProducts.color}
        image={mockProducts.image}
        isLarge={mockProducts.isLarge}
      />
    )
  ).toHaveLength(1);
});
