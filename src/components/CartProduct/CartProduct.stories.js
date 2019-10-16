import React from 'react';

import CartProduct from '.';
import mock from './mock';

export default {
  component: CartProduct,
  title: 'CartProduct',
};

export const regular = () => (
  <div style={{ margin: 10, width: 500 }}>
    <CartProduct {...mock} />
  </div>
);

export const onSale = () => (
  <div style={{ margin: 10, width: 500 }}>
    <CartProduct {...mock} onSale />
  </div>
);
