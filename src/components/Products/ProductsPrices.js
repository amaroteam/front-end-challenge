import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  on_sale: PropTypes.bool,
  regular_price: PropTypes.string,
  actual_price: PropTypes.string,
  discount_percentage: PropTypes.string,
};

const defaultProps = {
  on_sale: false,
  regular_price: '',
  actual_price: '',
  discount_percentage: '',
};

const ProductsPrices = ({
  on_sale,
  regular_price,
  actual_price,
  discount_percentage,
}) => {
  return (
    <React.Fragment>
      {on_sale ? (
        <React.Fragment>
          <p className="App__products__details App__products__details--discount">
            {regular_price}
          </p>
          <p className="App__products__details">
            {actual_price}
            {' '}
            {`(-${discount_percentage})`}
          </p>
        </React.Fragment>
      ) : (
        <p className="App__products__details">{regular_price}</p>
      )}
    </React.Fragment>
  );
};

ProductsPrices.propTypes = propTypes;
ProductsPrices.defaultProps = defaultProps;

export default ProductsPrices;
