import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isTitle: PropTypes.bool.isRequired,
};

const ProductsTitle = ({ name, color, isTitle }) => {
  const nameLowerCase = name.toLowerCase();
  const colorLowerCase = color.toLowerCase();

  return (
    <React.Fragment>
      {isTitle ? (
        <h1 className="App__products__title App__products__title--large">
          {nameLowerCase}
          <span className="App__products__subtitle">{colorLowerCase}</span>
        </h1>
      ) : (
        <h2 className="App__products__title">
          {nameLowerCase}
          <span className="App__products__subtitle">{colorLowerCase}</span>
        </h2>
      )}
    </React.Fragment>
  );
};

ProductsTitle.propTypes = propTypes;

export default ProductsTitle;
