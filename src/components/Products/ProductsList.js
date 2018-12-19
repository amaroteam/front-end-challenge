import React from 'react';
import PropTypes from 'prop-types';

import ProductsItem from './ProductsItem';

const propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  isOnSale: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]).isRequired,
};

const ProductsList = ({ products, isOnSale }) => {
  const hasOnSale = isOnSale === 'sim';

  const productsFiltered = isOnSale.length
    ? products.filter(product => product.on_sale === hasOnSale)
    : products;

  return (
    <React.Fragment>
      {productsFiltered.map((product, index) => {
        return <ProductsItem key={index.toString()} product={product} />;
      })}
    </React.Fragment>
  );
};

ProductsList.propTypes = propTypes;

export default ProductsList;
