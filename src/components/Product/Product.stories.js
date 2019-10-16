import React from 'react';

import Product from '.';
import mock from './mock';

export default {
  component: Product,
  title: 'Product',
};

export const regular = () => (
  <div style={{ width: 400, margin: 10 }}>
    <Product {...mock} />
  </div>
);

export const onSale = () => (
  <div style={{ width: 400, margin: 10 }}>
    <Product {...mock} onSale />
  </div>
);
