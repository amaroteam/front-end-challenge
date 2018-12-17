import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import friendlyURL from '../../utils';

import ProductsTitle from './ProductsTitle';
import ProductsImage from './ProductsImage';
import ProductsPrices from './ProductsPrices';

const propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    on_sale: PropTypes.bool.isRequired,
    regular_price: PropTypes.string.isRequired,
    actual_price: PropTypes.string.isRequired,
    code_color: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    discount_percentage: PropTypes.string,
    image: PropTypes.string,
  }),
};

const defaultProps = {
  product: {
    discount_percentage: '',
    image: '',
  },
};

const ProductsItem = ({ product }) => {
  const {
    name,
    style,
    actual_price,
    code_color,
    color,
    discount_percentage,
    image,
    on_sale,
    regular_price,
  } = product;

  return (
    <Link
      className="App__products__item"
      to={{
        pathname: `/p/${friendlyURL(name, color, style)}`,
        state: {
          style: style,
          code_color: code_color,
        },
      }}
    >
      <ProductsImage name={name} color={color} image={image} isLarge={false} />

      <ProductsTitle name={name} color={color} isTitle={false} />

      <ProductsPrices
        on_sale={on_sale}
        regular_price={regular_price}
        actual_price={actual_price}
        discount_percentage={discount_percentage}
      />
    </Link>
  );
};

ProductsItem.propTypes = propTypes;
ProductsItem.defaultProps = defaultProps;

export default ProductsItem;
