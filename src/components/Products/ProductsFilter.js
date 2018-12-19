import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ProductsFilter = ({ onClick }) => {
  return (
    <div className="App__filter">
      <button
        type="button"
        className="App__button App__button--small"
        value="sim"
        onClick={onClick}
      >
        Com Promoção
      </button>

      <button
        type="button"
        className="App__button App__button--small"
        value="não"
        onClick={onClick}
      >
        Sem Promoção
      </button>

      <button
        type="button"
        className="App__button App__button--small"
        value=""
        onClick={onClick}
      >
        Todos
      </button>
    </div>
  );
};

ProductsFilter.propTypes = propTypes;

export default ProductsFilter;
