import React from 'react';
import Product from '.';

export default {
  component: Product,
  title: 'Product',
};

const list = [
  {
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
  },
  {
    name: 'REGATA ALCINHA FOLK',
    style: '20002570',
    code_color: '20002570_614',
    color_slug: 'preto',
    color: 'PRETO',
    onSale: true,
    regularPrice: 'R$ 99,90',
    actualPrice: 'R$ 79,90',
    discountPercentage: '50%',
    installments: '3x R$ 33,30',
    image:
      'https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578',
    sizes: [
      {
        available: true,
        size: 'PP',
        sku: '5723_40130843_0_PP',
      },
      {
        available: true,
        size: 'P',
        sku: '5723_40130843_0_P',
      },
      {
        available: true,
        size: 'M',
        sku: '5723_40130843_0_M',
      },
      {
        available: true,
        size: 'G',
        sku: '5723_40130843_0_G',
      },
      {
        available: true,
        size: 'GG',
        sku: '5723_40130843_0_GG',
      },
    ],
  },
  {
    name: 'TOP CROPPED SUEDE',
    style: '20002575',
    code_color: '20002575_035',
    color_slug: 'caramelo',
    color: 'CARAMELO',
    onSale: false,
    regularPrice: 'R$ 129,90',
    actualPrice: 'R$ 129,90',
    discountPercentage: '',
    installments: '3x R$ 43,30',
    image:
      'https://d3l7rqep7l31az.cloudfront.net/images/products/20002575_027_catalog_1.jpg?1459537946',
    sizes: [
      {
        available: false,
        size: 'PP',
        sku: '5733_1000054_0_PP',
      },
      {
        available: true,
        size: 'P',
        sku: '5733_1000054_0_P',
      },
      {
        available: true,
        size: 'M',
        sku: '5733_1000054_0_M',
      },
      {
        available: true,
        size: 'G',
        sku: '5733_1000054_0_G',
      },
      {
        available: false,
        size: 'GG',
        sku: '5733_1000054_0_GG',
      },
    ],
  },
  {
    name: 'BATA DECOTE FLUID',
    style: '20002581',
    code_color: '20002581_614',
    color_slug: 'mini-folk',
    color: 'MINI FOLK',
    onSale: false,
    regularPrice: 'R$ 149,90',
    actualPrice: 'R$ 149,90',
    discountPercentage: '',
    installments: '3x R$ 49,97',
    image:
      'https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611',
    sizes: [
      {
        available: false,
        size: 'PP',
        sku: '5749_341_0_PP',
      },
      {
        available: true,
        size: 'P',
        sku: '5749_341_0_P',
      },
      {
        available: false,
        size: 'M',
        sku: '5749_341_0_M',
      },
      {
        available: true,
        size: 'G',
        sku: '5749_341_0_G',
      },
      {
        available: true,
        size: 'GG',
        sku: '5749_341_0_GG',
      },
    ],
  },
];

export const story = () =>
  list.map(item => (
    <div style={{ width: 400, margin: 10, display: 'inline-block' }}>
      <Product {...item} callback={{ addToCart: () => {} }} />
    </div>
  ));
