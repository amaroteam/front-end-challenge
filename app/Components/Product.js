import React from 'react'
import uuid from 'uuid'
import PubSub from 'pubsub-js'

import Icon from './Icon'

import * as CartStorage from '../Utils/CartStorage'
import { handleImage } from '../Utils/Products'

function renderDiscount (discount) {
  if (!discount) {
    return
  }

  return (
    <span className="onsale">{discount}</span>
  )
}

function renderPrice (item) {
  if (item.on_sale) {
    return (
      <div className="product-price">
        <del className="normal">{item.regular_price}</del>
        <p className="ammount">{item.actual_price}</p>
        <small className="installments">{item.installments}</small>
      </div>
    )
  }

  return (
    <div className="product-price">
      <p className="ammount">{item.actual_price}</p>
      <small className="installments">{item.installments}</small>
    </div>
  )
}

function toCart (item) {
  item.quantity = 1
  item.id = uuid()

  CartStorage.add(item)

  let cart = CartStorage.get()

  PubSub.publish('cart', cart)
}

const Product = ({item}) => (
  <div className="card-product">
    {renderDiscount(item.discount_percentage)}

    <figure className="cover">
      <img className="image" src={handleImage(item.image)} alt={item.name} />
    </figure>

    <div className="product-meta">
      <h2 className="title">{item.name}</h2>

      {renderPrice(item)}

      <button className="product-buy" onClick={() => toCart(item)}>
        <span>Adicionaro ao carrinho</span>
        <Icon name="cart" />
      </button>
    </div>
  </div>
)

export default Product
