import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isOnSale: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ProductsFilter = ({ isOnSale, onClick }) => {
  return (
    <div className="App__filter">
      <button
        type="button"
        className="App__button App__button--small"
        onClick={onClick}
      >
        Filtrar Promoções -
        {' '}
        {isOnSale ? 'Sim' : 'Não'}
      </button>
    </div>
  );
};

ProductsFilter.propTypes = propTypes;

export default ProductsFilter;
