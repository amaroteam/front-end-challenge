import React from 'react';
import PropTypes from 'prop-types';

import BasketItem from './BasketItem';
import withLoader from '../withLoader';

const propTypes = {
  basket: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
};

const BasketList = ({ basket, onClick }) => {
  return (
    <React.Fragment>
      {basket.map((item, index) => {
        const { name, image, color, qtd, size, price } = item;

        return (
          <BasketItem
            key={index.toString()}
            index={index}
            name={name}
            image={image}
            color={color}
            qtd={qtd}
            size={size}
            price={price}
            onClick={onClick}
          />
        );
      })}
    </React.Fragment>
  );
};

BasketList.propTypes = propTypes;

export default withLoader(BasketList);
