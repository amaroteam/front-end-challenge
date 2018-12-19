import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  sizes: PropTypes.instanceOf(Array),
  sizeSelected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  sizes: [],
};

const ProductsSizes = ({ sizes, sizeSelected, onClick }) => {
  return (
    <p className="App__products__sizes">
      <span className="App__products__name">Tamanho:</span>

      {sizes.map((item, index) => {
        const { available, size } = item;
        const isSelected =
          sizeSelected === size && ' App__products__sizes__item--selected';

        return (
          <React.Fragment key={index.toString()}>
            {available ? (
              <button
                type="button"
                className={`App__products__sizes__item ${isSelected}`}
                onClick={onClick}
                value={size}
              >
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
