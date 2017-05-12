import React from 'react'
import { connect } from 'react-redux'

import Product from './Product'

import { toggleVisibility } from '../../actions/cartActions'

const mapStateToProps = ({cart}) => ({
  cart
})

const mapDispatchToProps = (dispatch => ({
  toggle () {
    dispatch(toggleVisibility())
  }
}))

const Cart = props => {
  const { products, total } = props.cart

  const changeQuantity = (event) => {
    window.alert('oi')
  }

  return (
    <section className="cart-container">
      <div className="cart">
        <div className="cart-title">
          <h3>Carrinho</h3>
          <button onClick={props.toggle}>&times;</button>
        </div>

        <div className="cart-products">
          {products.map(product => <Product key={product.cid} item={product} change={changeQuantity} />)}
        </div>

        <div className="cart-meta">
          <div className="cart-total">
            <span>Total: </span> <strong>{total}</strong>
          </div>
          <button className="cart-end">Pagamento</button>
        </div>
      </div>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
