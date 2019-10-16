import React, { useState } from 'react';
import { string, bool, shape, number, func } from 'prop-types';

import Icon from '../Icon';
import { StyledWrapper } from './style';

const propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  onSale: bool.isRequired,
  regularPrice: string.isRequired,
  actualPrice: string.isRequired,
  installments: string.isRequired,
  quantity: number.isRequired,
  quantityCallback: func.isRequired,
  deleteCallback: func.isRequired,
  selectedSize: shape({
    size: string,
  }).isRequired,
};

function CartProduct({
  image,
  name,
  onSale,
  regularPrice,
  actualPrice,
  installments,
  selectedSize,
  quantity,
  quantityCallback,
  deleteCallback,
}) {
  const [internalQuantity, setInternalQuantity] = useState(quantity);

  const onChangeQuantity = value => {
    setInternalQuantity(value);
    quantityCallback(parseInt(value, 10));
  };

  const hasUniqueSize = selectedSize.size === 'U';

  return (
    <StyledWrapper>
      <button type='button' className='delete' onClick={() => deleteCallback()}>
        <Icon name='close' />
      </button>

      <div className='columnLeft'>
        <img src={image} alt='' />
      </div>

      <div className='columnRight'>
        <p className='name'>{name}</p>

        {onSale
          ? [
              <p key='regularPrice' className='regularPrice'>
                {actualPrice}
              </p>,
              <p key='actualPrice' className='actualPrice'>
                {regularPrice}
              </p>,
              <p key='installments' className='installments'>
                {installments}
              </p>,
            ]
          : [
              <p key='regularPrice' className='regularPrice'>
                {regularPrice}
              </p>,
              <p key='installments' className='installments'>
                {installments}
              </p>,
            ]}

        {!hasUniqueSize && (
          <div className='sizes'>
            <span>selected size:</span>

            <div className='size'>
              <span>{selectedSize.size}</span>
            </div>
          </div>
        )}

        <div className='quantity'>
          <span>quantity:</span>

          <div>
            <input
              type='number'
              value={internalQuantity}
              onChange={event => onChangeQuantity(event.target.value)}
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

CartProduct.propTypes = propTypes;

export default CartProduct;
