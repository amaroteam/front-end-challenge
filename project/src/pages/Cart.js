import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const list = useSelector(state => state.cart);

  return list.map(item => <div>{item.name}</div>);
}

export default Cart;
