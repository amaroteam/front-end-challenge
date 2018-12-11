/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import slugfy from '../../utils/slugfy';
import './Product.scss';

const Product = ({
  className,
  name,
  style,
  discount_percentage,
  on_sale,
  image,
  regular_price,
  actual_price,
}) => (
  <div className={className} key={style}>
    <Link to={`/produto/${slugfy(name)}`}>
      <ProductImage
        image={image}
        onSale={on_sale}
        discount={discount_percentage}
        altAttr={name}
      />

      <h3 className="product__name">{name}</h3>
      <div className="product__pricing">
        {on_sale
          && <span className="product__price product__price--from">{regular_price}</span>
        }
        <span className="product__price product__price--to">{actual_price}</span>
      </div>
    </Link>
  </div>
);

Product.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.string,
  discount_percentage: PropTypes.string,
  on_sale: PropTypes.bool,
  image: PropTypes.string,
  regular_price: PropTypes.string,
  actual_price: PropTypes.string,
};

Product.defaultProps = {
  className: 'product',
  name: '',
  style: '',
  discount_percentage: '',
  on_sale: '',
  image: '',
  regular_price: '',
  actual_price: '',
};

export default Product;
