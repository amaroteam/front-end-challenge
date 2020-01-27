import React from 'react';

import '../../styles/containers/ProductInfo.scss';

import Button from '../../components/Button';
import SizeBullets from '../../components/SizeBullets/sizeBullets';

const ProductInfo = ({
  image,
  name,
  discount,
  actualPrice,
  installments,
  regularPrice,
  color,
  colorName,
}) => {
  return (
    <div className="am-product">
      <figure className="am-product__image">
        <img src={image} alt={name} />
      </figure>
      <div className="am-product__info">
        <h1 className="am-product__info-name">{name}</h1>
        <div className="am-product__info-pricing">
          {discount ? (
            <>
              <span className="am-product__info-pricing-price">
                {actualPrice}
              </span>
              {installments && (
                <span className="am-product__info-pricing-installments">
                  {installments}
                </span>
              )}
              <del className="am-product__info-pricing-old-price">
                {regularPrice}
              </del>
              <span className="am-product__info-pricing-discount">
                {`(${discount} off)`}
              </span>
            </>
          ) : (
            <>
              <span className="am-product__info-pricing-price">
                {actualPrice}
              </span>
              {installments && (
                <span className="am-product__info-pricing-installments">
                  {installments}
                </span>
              )}
            </>
          )}
        </div>
        <div className="am-product__info-color">
          <span className="am-product__info-color-name">
            Cor:
            <strong>{colorName}</strong>
          </span>
          <figure className="am-product__info-color-bullet">
            <img src={color} alt={colorName} />
          </figure>
        </div>
        <div className="am-product__info-size">
          <span className="am-product__info-size-name">
            Tamanho:
            <strong>p</strong>
          </span>
          <SizeBullets className="am-product__info-size-bullets" />
        </div>
        <Button
          variant="--primary"
          className="am-product__info-button"
          type="button"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
