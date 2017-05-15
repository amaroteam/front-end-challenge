import React from 'react'
import { connect } from 'react-redux'

import { 
  toggleVisibility,
  removeProduct,
  changeQuantity,
  changeTotal
} from '../../actions/cartActions'

import Product from './Product'

const Cart = props => {
  const { products, total } = props

  return (
    <section className="cart-container">
      <div className="cart">
        <div className="cart-title">
          <h3>Carrinho</h3>
          <button onClick={props.toggle}>&times;</button>
        </div>

        <div className="cart-products">
          {
            products.map(product => (
              <Product 
                key={product.cid} 
                item={product} 
                remove={props.remove}
                changeQuantity={props.changeQuantity}
              />
            ))
          }
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

const mapStateToProps = ({cart}) => cart

const mapDispatchToProps = (dispatch => ({
  toggle () {
    dispatch(toggleVisibility())
  },

  remove (id) {
    dispatch(removeProduct(id))
    dispatch(changeTotal())
  },

  changeQuantity (id, value) {
    dispatch(changeQuantity(id, value))
    dispatch(changeTotal())
  }
}))

export default connect(mapStateToProps, mapDispatchToProps)(Cart)