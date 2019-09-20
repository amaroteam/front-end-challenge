import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from "react-icons/md";
import * as CartActions from "../../store/modules/Cart/actions";

import { formatPrice } from "../../util/format";
import { Container, Grid, ProductTable, Total } from "./styles";
import Logo from '../../assets/Amaro_logo.png'

export default function Cart() {

  const cart = useSelector(state => state.cart.map(product => {
    return ({
      ...product,
      subtotal: formatPrice(parseFloat(product.actual_price.replace('R$', '').replace(',', '.')) * product.amount)
    })
  }));
  const total = useSelector(state => formatPrice(
    state.cart.reduce((total, product) => {
      return total + parseFloat(product.actual_price.replace('R$', '').replace(',', '.')) * product.amount;
    }, 0)
  ));

  const dispatch = useDispatch();

  function increment(product, idx) {
    dispatch(CartActions.updateAmountRequest(product.amount + 1, idx));
  }

  function decrement(product, idx) {
    dispatch(CartActions.updateAmountRequest(product.amount - 1, idx));
  }

  return (
    <Container>
      <ProductTable>
        <Grid>
          {cart.map((product, idx) => {
            return (
              <Grid className="body-item" key={product.code_color}>
                <div className="product-description">
                  <img src={product.image || Logo} alt={product.name} />
                  <div>
                    <p>{product.name}</p>
                    <p>Unitário: {product.actual_price}</p>
                  </div>
                  <div className="product-quantity md">
                    <button type="button" onClick={() => decrement(product, idx)}>
                      <MdRemoveCircleOutline size={20} color="#000" />
                    </button>
                    <input readOnly type="number" value={product.amount} />
                    <button type="button" onClick={() => increment(product, idx)}>
                      <MdAddCircleOutline size={20} color="#000" />
                    </button>
                  </div>
                  <p className="md">{product.subtotal}</p>
                  <button
                    type="button"
                    onClick={() => dispatch(CartActions.removeFromCartRequest(product.code_color))}
                  >
                    <MdDelete size={20} color="#000" />
                  </button>
                </div>
                <Grid className="product-subtotal">
                  <div className="product-quantity">
                    <button type="button" onClick={() => decrement(product, idx)}>
                      <MdRemoveCircleOutline size={20} color="#000" />
                    </button>
                    <input readOnly type="number" value={product.amount} />
                    <button type="button" onClick={() => increment(product, idx)}>
                      <MdAddCircleOutline size={20} color="#000" />
                    </button>
                  </div>
                  <p>{product.subtotal}</p>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
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
