import React from 'react';
import Product from '.';

export default {
  component: Product,
  title: 'Product',
};

const props = {
  name: 'VESTIDO TRANSPASSE BOW',
  style: '20002605',
  onSale: false,
  regularPrice: 'R$ 199,90',
  actualPrice: 'R$ 199,90',
  discountPercentage: '',
  installments: '3x R$ 66,63',
  image:
    'https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912',
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

export const regular = () => (
  <div style={{ width: 400, margin: 10 }}>
    <Product {...props} callback={{ addToCart: () => {} }} />
  </div>
);

export const onSale = () => (
  <div style={{ width: 400, margin: 10 }}>
    <Product {...props} onSale callback={{ addToCart: () => {} }} />
  </div>
);
