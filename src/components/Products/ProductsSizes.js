import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  sizes: PropTypes.instanceOf(Array),
};

const defaultProps = {
  sizes: [],
};

const ProductsSizes = ({ sizes }) => {
  return (
    <p className="App__products__sizes">
      <span className="App__products__name">Selecione o tamanho:</span>

      {sizes.map((item, index) => {
        const { available, size } = item;

        return (
          <React.Fragment key={index.toString()}>
            {available ? (
              <button type="button" className="App__products__sizes__item">
                {size}
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="App__products__sizes__item"
              >
                {size}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};

ProductsSizes.propTypes = propTypes;
ProductsSizes.defaultProps = defaultProps;

export default ProductsSizes;
