import React, { useState, useEffect } from 'react';
import { string, bool, shape, arrayOf, func } from 'prop-types';

import { StyledWrapper, StyledButton } from './style';

const propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  regularPrice: string.isRequired,
  actualPrice: string.isRequired,
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

function validate({ selectedSize }) {
  if (!selectedSize) return false;

  return true;
}

function DetailedProduct({
  image,
  name,
  regularPrice,
  onSale,
  actualPrice,
  installments,
  sizes,
  callback,
}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(false);

  const addToCart = () => {
    const hasUniqueSize = sizes.length === 1;
    if (validate({ selectedSize }) === false && !hasUniqueSize)
      return setError(true);

    setError(false);

    if (hasUniqueSize) return callback(sizes[0]);
    return callback(sizes[selectedSize - 1]);
  };

  useEffect(() => {
    setError(false);
  }, [selectedSize]);

  return (
    <StyledWrapper sale={onSale}>
      <div className='content'>
        <div className='image'>
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

          <div>
            {sizes.map(
              ({ available, size }, index) =>
                available && (
                  <StyledButton
                    key={`size-${index}`}
                    onClick={() => setSelectedSize(index + 1)}
                    type='button'
                    selected={index + 1 === selectedSize}
                  >
                    <span>{size}</span>
                  </StyledButton>
                )
            )}
          </div>

          <div className='submit'>
            <button onClick={() => addToCart()} type='button'>
              adicionar ao carrinho
            </button>
          </div>

          <div>{error && <span>é necessário selecionar um tamanho</span>}</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

DetailedProduct.propTypes = propTypes;

export default DetailedProduct;
