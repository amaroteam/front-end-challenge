import React from 'react';

import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { PlusButton, MinusButton } from '../Button/IconButtons';
import Button from '../Button';
import ProductImage from './ProductImage';

const ProductListItem = ({
  item,
  onClickAdd,
  onClickRemove,
  onClickDropItem,
}) => (
  <div className="product__list__item">
    <div className="product__list__row">
      <ProductImage
        {...item}
      />

      <div className="product__list__info">
        <p className="product__list__name">{item.name}</p>
        <p className="product__list__size">
          {item.sizes
            .filter(size => item.selectedSize === size.sku)
            .map(sizeObj => <span key={uuidv1()}>{`Tam.: ${sizeObj.size}`}</span>)
          }
        </p>

        {item.quantity
          && (
            <div className="product__list__quantity">
              <MinusButton
                className="cart__icons"
                onClick={event => onClickRemove(event, item.name)}
              />
              <div className="product__list__input">
                {item.quantity}
              </div>
              <PlusButton
                className="cart__icons"
                onClick={event => onClickAdd(event, item)}
              />
            </div>
          )
        }
      </div>

      <div className="product__list__pricing">
        <div className="product__list__current">
          {item.actual_price}
        </div>

        <div className="product__list__installments">
          {item.installments}
        </div>
      </div>
    </div>

    {item.quantity
      && (
        <div className="product__row">
          <Button
            className="cart__remove"
            onClick={event => onClickDropItem(event, item.name)}
          >
            Remover item
          </Button>
        </div>
      )
    }
  </div>
);

ProductListItem.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default ProductListItem;
