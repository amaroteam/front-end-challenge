import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../utils/format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductTable,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

function Cart({ products, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtda</th>
            <th>SubTotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr>
              <td>
                <img
                  alt={
                    product.name + ' - ' + product.color + ' - ' + product.slug
                  }
                  src={product.image}
                />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>{product.regular_price}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#f8c1b8" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#f3988a" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#f3988a" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>{total}</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.regular_price * product.amount),
    priceFormatted: formatPrice(product.regular_price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.regular_price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
