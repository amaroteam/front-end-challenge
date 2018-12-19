import React from 'react';
import PropTypes from 'prop-types';

import ProductsItem from './ProductsItem';

const propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  isOnSale: PropTypes.bool.isRequired,
};

const ProductsList = ({ products, isOnSale }) => {
  const productsFiltered = products.filter(
    product => product.on_sale === isOnSale
  );

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
