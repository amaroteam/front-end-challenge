import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteProductFromCart,
  updateProductFromCart,
} from '../../store/actions';
import CartProduct from '../../components/CartProduct';
import { translateToReal } from '../../utils/number';
import { getPrices } from './utils';
import { StyledWrapper } from './style';

function Cart() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.cart);
  const prices = getPrices(list);

  const deleteProduct = id => dispatch(deleteProductFromCart(id));
  const updateProductQuantity = (product, quantity) =>
    dispatch(updateProductFromCart({ ...product, quantity }));

  return (
    <StyledWrapper>
      <div className='list'>
        {list.map((item, index) => (
          <CartProduct
            {...item}
            key={`cart-${index}`}
            quantityCallback={quantity => updateProductQuantity(item, quantity)}
            deleteCallback={() => deleteProduct(item.id)}
            quantity={item.quantity}
          />
        ))}
      </div>

      <div className='checkout'>
        <div className='columnLeft'>
          <p className='subtotal'>Subtotal</p>
          <p className='discount'>Desconto</p>
          <p className='total'>Total</p>
        </div>

        <div className='columnRight'>
          <p className='subtotal'>{translateToReal(prices.subTotal)}</p>
          <p className='discount'>{translateToReal(prices.totalDiscount)}</p>
          <p className='total'>{translateToReal(prices.total)}</p>
        </div>

        <div className='submit'>
          <button type='button' onClick={() => {}}>
            COMPRAR
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Cart;
