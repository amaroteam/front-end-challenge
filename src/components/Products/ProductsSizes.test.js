import React from 'react';
import { shallow } from 'enzyme';
import ProductsSizes from './ProductsSizes';

test('expect to render ProductsSizes component', () => {
  const mockSizes = {
    sizes: [
      {
        available: false,
        size: 'PP',
        sku: '5807_343_0_PP',
      },
      {
        available: true,
        size: 'P',
        sku: '5807_343_0_P',
      },
      {
        available: true,
        size: 'M',
        sku: '5807_343_0_M',
      },
      {
        available: true,
        size: 'G',
        sku: '5807_343_0_G',
      },
      {
        available: false,
        size: 'GG',
        sku: '5807_343_0_GG',
      },
    ],
  };

  expect(shallow(<ProductsSizes sizes={mockSizes.sizes} />)).toHaveLength(1);
});
