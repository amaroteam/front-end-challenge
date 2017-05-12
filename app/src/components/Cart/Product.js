import React from 'react'
import { connect } from 'react-redux'

import {
  removeProduct,
  changeTotal,
  changeQuantity
} from '../../actions/cartActions'

const mapDispatchToProps = (dispatch => ({
  remove (id) {
    dispatch(removeProduct(id))
    dispatch(changeTotal())
  },

  change (id, value) {
    dispatch(changeQuantity(id, value))
    dispatch(changeTotal())
  }
}))

const Product = props => {
  const { item, remove } = props

  return (
    <section className="product on-cart">
      <figure className="product-cover">
        {
          item.image
            ? (<img src={item.image} alt={item.name}/>)
            : <span className="ion-image"></span>
        }
      </figure>
      <div className="product-meta">
        <div className="product-title">
          <h3>{item.name}</h3>
          <button className="product-remove" onClick={() => remove(item.cid)}>&times;</button>
        </div>

        <div className="product-prices">
          <div className="product-quantity">
            <input type="text" value={item.quantity} />
            <button className="product-increase" onClick={() => props.change(item.cid, 1)}>+</button>
            <button className="product-decrease" onClick={() => props.change(item.cid, -1)}>-</button>
          </div>
          <strong>{item.cart_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong>
        </div>
      </div>
    </section>
  )
}

export default connect('', mapDispatchToProps)(Product)
