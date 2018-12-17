import React from 'react';
import { shallow } from 'enzyme';
import ProductsTitle from './ProductsTitle';

test('expect to render ProductsTitle component', () => {
  const mockTitle = {
    name: 'VESTIDO TRANSPASSE BOW',
    color: 'TAPEÇARIA',
    isTitle: true,
  };

  expect(
    shallow(
      <ProductsTitle
        name={mockTitle.name}
        color={mockTitle.color}
        isTitle={mockTitle.isTitle}
      />
    )
  ).toHaveLength(1);
});
