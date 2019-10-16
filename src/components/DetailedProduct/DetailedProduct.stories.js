import React from 'react';

import DetailedProduct from '.';
import mock from './mock';

export default {
  component: DetailedProduct,
  title: 'DetailedProduct',
};

export const regular = () => (
  <div style={{ margin: 10 }}>
    <DetailedProduct {...mock} />
  </div>
);

export const onSale = () => (
  <div style={{ margin: 10 }}>
    <DetailedProduct {...mock} onSale />
  </div>
);
