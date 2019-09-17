import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, ProductTable, Total } from "./styles";
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from "react-icons/md";
import * as CartActions from "../../store/modules/Cart/actions";

import { formatPrice } from "../../util/format";

export default function Cart() {
  
  const cart = useSelector(state => state.cart.map(product => {
    return ({
    ...product,
    subtotal: formatPrice(parseFloat(product.actual_price.replace('R$', '').replace(',','.')) * product.amount)
  })}));
  const total = useSelector(state => formatPrice(
    state.cart.reduce((total, product) => {
      return total +  parseFloat(product.actual_price.replace('R$', '').replace(',','.')) * product.amount;
    }, 0)
  ));

  const dispatch = useDispatch();
  
  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.code_color, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.code_color, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => {
            return (
              <tr key={product.code_color}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.actual_price}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#000" />
                    </button>
                    <input readOnly type="number" value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#000" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(CartActions.removeFromCart(product.code_color))}
                  >
                    <MdDelete size={20} color="#000" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FINALIZAR PEDIDO</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
