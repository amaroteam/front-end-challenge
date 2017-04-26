import React from 'react';

const ProductsCard = ({product}) => {
  let imageEl = <div className="no-image">No Image :(</div>;

  if (product.image) {
    imageEl = <img src={product.image} />;
  }

  return (
    <div className="product-card">
      {imageEl}
      <div className="product-name">{product.name}</div>
      <div className={`product-regular-price ${(product.on_sale) ? 'sale' : ''}`}>{product.regular_price}</div>
      <div className="product-price">{product.actual_price}</div>
    </div>
  );
}

export default ProductsCard;
