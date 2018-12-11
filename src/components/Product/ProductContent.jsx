/* eslint-disable camelcase */
import React from 'react';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import Button from '../Button';

const ProductContent = ({
  name,
  onSale,
  regular_price,
  actual_price,
  installments,
  sizes,
  selectedSize,
  onClickAdd,
  onClickSize,
  sizeWasNotSelected,
}) => (
  <div className="product__content">
    <h3 className="product__name">{name}</h3>

    <div className="product__pricing">
      {onSale
        && <span className="product__price product__price--from">{regular_price}</span>
      }
      <span className="product__price product__price--to">{actual_price}</span>
      <span className="product__price product__price--installments">
        {`em até ${installments}`}
      </span>
    </div>

    <div className="product__sizes">
      <p className="product__sizes__title">
        Escolha o tamanho
      </p>

      { sizeWasNotSelected
        && <p className="product__sizes__warning">É necessário escolher um tamanho</p>
      }

      <div className="product__btn-group">
        {sizes.length > 0
          && sizes
            .filter(item => item.available === true)
            .map(size => (
              <Button
                onClick={event => onClickSize(event, size.sku)}
                key={uuidv1()}
                className={`product__filter ${selectedSize === size.sku ? 'product__filter--selected' : ''}`}
              >
                {size.size}
              </Button>
            ))
        }
      </div>
    </div>

    <div className="product__actions">
      <Button
        className="product__add-to-cart"
        onClick={event => onClickAdd(event, selectedSize)}
      >
        Adicionar à Sacola
      </Button>
    </div>
  </div>
);

ProductContent.propTypes = {
  name: PropTypes.string,
  onSale: PropTypes.bool,
  regular_price: PropTypes.string,
  actual_price: PropTypes.string,
  installments: PropTypes.string,
  sizes: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  selectedSize: PropTypes.string,
  sizeWasNotSelected: PropTypes.bool,
  onClickSize: PropTypes.func,
  onClickAdd: PropTypes.func,
};

ProductContent.defaultProps = {
  name: '',
  onSale: false,
  regular_price: '',
  actual_price: '',
  installments: '',
  sizes: [],
  selectedSize: '',
  sizeWasNotSelected: false,
  onClickSize: () => {},
  onClickAdd: () => {},
};

export default ProductContent;
