import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as QuickViewActionsCreator } from '../../store/ducks/quickview';

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
  sizes,
  sizeProductQuickView,
  sizeSelected,
}) => {
  const [active, setActive] = useState(-1);
  const [size, setSize] = useState();

  const handleSizeSelected = ev => {
    const { index } = ev.target.dataset;
    const { value } = ev.target;
    sizeProductQuickView(true);
    setSize(value);
    setActive(index);
  };
  return (
    <div className="am-product">
      <figure className="am-product__image">
        <img
          src={image || 'http://via.placeholder.com/470x594'}
          alt={name}
        />
      </figure>
      <div className="am-product__info">
        <h1 className="am-product__info-name">{name}</h1>
        <div className="am-product__info-pricing">
          {discount ? (
            <>
              <del className="am-product__info-pricing-old-price">
                {regularPrice}
              </del>
              <span className="am-product__info-pricing-price">
                {actualPrice}
              </span>
              <span className="am-product__info-pricing-discount">
                {`(${discount} off)`}
              </span>
              <span className="am-product__info-pricing-installments">
                {installments}
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
            <strong>{sizeSelected && size}</strong>
          </span>
          <SizeBullets
            onClick={ev => handleSizeSelected(ev)}
            className="am-product__info-size-bullets"
            sizes={sizes}
            activeIndex={active}
          />
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

const mapStateToProps = state => ({
  sizeSelected: state.quickview.size,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuickViewActionsCreator, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductInfo);
