import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import uuid from "uuid";

import Thumb from "../../../Thumb";

import { addProduct } from "../../../../api/redux/reducers/cart/actions";

const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  const productInstallment = (
    <div className="installment">
      <span>ou {product.installments}</span>
    </div>
  );

  return (
    <div className="product-item" data-sku={product.sku}>
      {product.on_sale && (
        <div className="product-promotion">
          {product.discount_percentage && (
            <small>{product.discount_percentage} off</small>
          )}
        </div>
      )}
      <Thumb
        classes="product-item__thumb"
        src={product.image}
        alt={product.title}
      />
      <p className="product-item__title">{product.name}</p>

      <div className="product-item__price">
        <div className="val">
          {product.discount_percentage && (
            <span>De: {product.regular_price} Por:</span>
          )}
          <b>{product.actual_price}</b>
        </div>
        {productInstallment}
      </div>
      <Popup
        modal
        trigger={<button className="product-item__buy-btn">Adicionar</button>}
      >
        {close => (
          <div>
            Por favor selecione uma opção:
            <div className="product-item__size" onClick={close}>
              {product.sizes.map(value => {
                return (
                  <Fragment key={uuid.v4()}>
                    <button
                      disabled={!value.available}
                      onClick={() =>
                        addProduct({
                          ...product,
                          id: value.sku,
                          variant: value.size
                        })
                      }
                    >
                      {value.size}
                    </button>
                  </Fragment>
                );
              })}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
