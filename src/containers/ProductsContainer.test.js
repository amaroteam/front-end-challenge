import React from 'react';
import { shallow } from 'enzyme';
import ProductsContainer from './ProductsContainer';

test('expect to render ProductsContainer component', () => {
  const mockProducts = [];

  expect(
    shallow(<ProductsContainer products={mockProducts} loading={false} />)
  ).toHaveLength(1);
});
