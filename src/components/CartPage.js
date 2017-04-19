import React from 'react'
import { Link } from 'react-router'
import Cart from '../containers/Cart'

const CartPage = () => (
  <div>
    <h3>
      <Link to="/">Voltar</Link>
    </h3>
    <Cart />
  </div>
)

export default CartPage