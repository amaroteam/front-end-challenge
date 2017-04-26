import React from 'react';

const ProductsCard = ({product}) => {
  return (
    <div className="product-card">
      {/*<img src={product.image} />*/}
      <div>{product.name}</div>
      <div>{product.regular_price}</div>
      <div>{product.actual_price}</div>
    </div>
  );
}

export default ProductsCard;
