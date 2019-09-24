import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

export default function Cart({ cart, removeFromCart, updateAmount }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart);

  function increment(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
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
          {cartProducts.map(product => (
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
                <strong>R$258,50</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#f3988a" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}
