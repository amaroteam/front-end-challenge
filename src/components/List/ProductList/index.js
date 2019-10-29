import React from 'react';
import uuid from "uuid";
import Product from './Product';

const ProductList = ({ products}) => {
  return products.map(p => {
    return <Product product={p} key={uuid.v4()} />;
  });
};

export default ProductList;
