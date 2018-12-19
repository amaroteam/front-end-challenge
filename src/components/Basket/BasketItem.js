import React from 'react';
import PropTypes from 'prop-types';

import ProductsImage from '../Products/ProductsImage';
import ProductsTitle from '../Products/ProductsTitle';

const propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  qtd: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const BasketItem = ({
  index,
  name,
  image,
  color,
  qtd,
  size,
  price,
  onClick,
}) => {
  return (
    <div className="App__basket__item">
      <ProductsImage name={name} color={color} image={image} isLarge={false} />

      <ProductsTitle name={name} color={color} isTitle={false} />

      <span className="App__basket__qtd">
        {'Qtd: '}
        {qtd}
      </span>

      <span className="App__basket__size">
        {'Tam: '}
        {size}
      </span>

      <span className="App__basket__price">{price}</span>

      <button
        type="button"
        className="App__basket__button App__button App__button--small"
        value={index}
        onClick={onClick}
      >
        Remover
      </button>
    </div>
  );
};

BasketItem.propTypes = propTypes;

export default BasketItem;
