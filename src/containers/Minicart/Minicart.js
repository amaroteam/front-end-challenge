import React from 'react';

import '../../styles/containers/Minicart.scss';

import Button from '../../components/Button';

const Minicart = ({
  quantity = 3,
  image = 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912',
  name = 'camisa bonitona da amaro',
  size = 'M',
  color = 'LARANJA',
  amount = 1,
  price = 'R$ 30,00',
  totalPrice = 'R$ 30,00',
}) => {
  return (
    <div className="am-minicart">
      <div className="am-minicart__header">
        <Button className="am-minicart__header-close" />
        <h3 className="am-minicart__header-title">
          Sacola
          {` (${quantity})`}
        </h3>
      </div>
      <ul className="am-minicart__items">
        <li className="am-minicart__item">
          <div className="am-minicart__item-left">
            <figure className="am-minicart__item-image">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="am-minicart__item-right">
            <h2 className="am-minicart__item-name">{name}</h2>
            <p className="am-minicart__item-size">
              Tam.:
              <span>{` ${size}`}</span>
            </p>
            <p className="am-minicart__item-color">
              Cor:
              <span>{` ${color}`}</span>
            </p>
            <div className="am-minicart__item-wrapper">
              <div className="am-minicart__item-qty">
                <Button
                  className="am-minicart__item-qty-btn has--minus"
                  type="button"
                />
                <input
                  className="am-minicart__item-qty-val"
                  type="text"
                  value={amount}
                  readOnly
                />
                <Button
                  type="button"
                  className="am-minicart__item-qty-btn has--plus"
                />
              </div>
              <span className="am-minicart__item-price">{price}</span>
            </div>
            <Button
              className="am-minicart__item-remove"
              type="button"
            />
          </div>
        </li>
      </ul>
      <div className="am-minicart__footer">
        <div className="am-minicart__footer-subtotal">
          <p className="am-minicart__footer-subtotal-text">
            Subtotal
          </p>
          <span className="am-minicart__footer-subtotal-price">
            {totalPrice}
          </span>
        </div>
        <Button
          className="am-minicart__footer-checkout"
          variant="--primary"
        >
          Ir para o pagamento
        </Button>
      </div>
    </div>
  );
};

export default Minicart;
