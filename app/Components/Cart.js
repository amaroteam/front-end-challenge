import React from 'react'
import ScrollBar from 'react-perfect-scrollbar'
import { FormattedNumber } from 'react-intl'

import Item from './Item'

const Cart = ({cart, visible, toggle}) => {
  const cartClass = `main-cart ${!visible ? '' : 'is-visible'}`
  const {products, ammount} = cart

  return (
    <div className={cartClass}>
      <div className="cart-mask"></div>

      <div className="cart-container">
        <div className="cart-list">
          <header className="cart-header">
            <p>Carrinho</p>
            <button className="cart-close" onClick={toggle}>&times;</button>
          </header>

          <div className="list">
            <ScrollBar>
              {products.map((item, index) => <Item key={index} product={item} />)}
            </ScrollBar>
          </div>
        </div>

        <div className="cart-checkout">
          <p className="cart-ammount"><strong>Total: </strong> <span><FormattedNumber style="currency" currency="BRL" value={ammount} /></span></p>
          <button className="checkout">Finalizar Compra</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
