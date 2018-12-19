import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  isLarge: PropTypes.bool.isRequired,
};

const defaultProps = {
  name: '',
  color: '',
  image: '',
};

const ProductsImage = ({ name, color, image, isLarge }) => {
  const nameLowerCase = name.toLowerCase();
  const colorLowerCase = color.toLowerCase();

  const isLargeClassName = isLarge ? 'App__products__picture--large' : '';

  return (
    <div className={`App__products__picture ${isLargeClassName}`}>
      <picture>
        <img
          src={image || 'https://via.placeholder.com/470x594'}
          className="App__products__photo"
          alt={`${nameLowerCase} - ${colorLowerCase}`}
        />
      </picture>
    </div>
  );
};

ProductsImage.propTypes = propTypes;
ProductsImage.defaultProps = defaultProps;

export default ProductsImage;
