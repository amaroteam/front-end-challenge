import React from 'react'
import { connect } from 'react-redux'

import { addProduct, changeTotal } from '../../actions/cartActions'

const mapDispatchToProps = (dispatch => ({
  onBuyClick (product) {
    dispatch(addProduct(product))
    dispatch(changeTotal())
  }
}))

const Product = props => {
  const { item } = props

  return (
    <section className="product">
      <figure className="product-cover">
        {
          item.image
            ? (<img src={item.image} alt={item.name}/>)
            : <span className="ion-image"></span>
        }
      </figure>
      <div className="product-meta">
        <h3 className="product-title">{item.name}</h3>
        <div className="product-prices">
          <p><strong>por: {item.actual_price}</strong> ou {item.installments}</p>
          {
            item.on_sale
              ? (<p><small>de: {item.regular_price}</small> <span>({item.discount_percentage})</span></p>)
              : null
          }
        </div>
        <div className="product-sizes">
          {
            item.sizes.filter(size => {
              return size.available
            }).map(({size, sku}) => <a key={sku} href="#">{size}</a>)
          }
        </div>
      </div>
      <button className="product-buy" onClick={() => props.onBuyClick(item)}>
        <span>Comprar</span>
      </button>
    </section>
  )
}

export default connect('', mapDispatchToProps)(Product)
