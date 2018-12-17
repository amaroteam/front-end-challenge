import React from 'react';
import PropTypes from 'prop-types';

import ProductsItem from './ProductsItem';

const propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};

const ProductsList = ({ products }) => {
  return (
    <React.Fragment>
      {products.map((product, index) => {
        return <ProductsItem key={index.toString()} product={product} />;
      })}
    </React.Fragment>
  );
};

ProductsList.propTypes = propTypes;

export default ProductsList;
