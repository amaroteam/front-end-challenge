import React from 'react';
import { string, bool, func, shape, arrayOf } from 'prop-types';

import { StyledWrapper } from './style';

const propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  regularPrice: string.isRequired,
  actualPrice: string.isRequired,
  discountPercentage: string.isRequired,
  installments: string.isRequired,
  onSale: bool.isRequired,
  sizes: arrayOf(
    shape({
      available: bool,
      size: string,
      sku: string,
    })
  ).isRequired,
  callback: func.isRequired,
};

function Product({
  image,
  name,
  regularPrice,
  onSale,
  actualPrice,
  discountPercentage,
  installments,
  sizes,
  callback,
}) {
  return (
    <StyledWrapper onClick={() => callback()} sale={onSale}>
      <div className='content'>
        <div className='image'>
          {onSale && (
            <div className='sale'>
              <p className='title'>SALE</p>
              <p className='percentage'>{discountPercentage}</p>
            </div>
          )}

          <img src={image} alt={`Foto do produto ${name}`} />
        </div>

        <div className='bottomContent'>
          <p className='name'>{name}</p>

          {onSale
            ? [
                <p key='regularPrice' className='regularPrice prices'>
                  {regularPrice}
                </p>,
                <p key='actualPrice' className='actualPrice prices'>
                  {actualPrice}
                </p>,
                <p key='installments' className='installments prices'>
                  {installments}
                </p>,
              ]
            : [
                <p key='regularPrice' className='regularPrice prices'>
                  {regularPrice}
                </p>,
                <p key='installments' className='installments prices'>
                  {installments}
                </p>,
              ]}

          <div className='sizes'>
            {sizes.map(
              ({ available, size }, index) =>
                available && (
                  <div key={`size-${index}`} className='size'>
                    <span>{size}</span>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

Product.propTypes = propTypes;

export default Product;
