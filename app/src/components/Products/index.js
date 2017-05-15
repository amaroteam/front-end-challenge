import React from 'react'
import { connect } from 'react-redux'

import {
  addProduct,
  changeTotal
} from '../../actions/cartActions'

import { filterProducts } from '../../actions/productsActions'

import Product from './Product'

const Products = props => {
  let products = props.data
  const { filtering, search } = props

  if (search) {
    products = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
  }

  if (filtering) {
    products = products.filter(product => product.on_sale)
  }

  return (
    <section className="products">
      <div className="container">
        <button className="filter-button" onClick={props.filter}>{filtering ? 'Todos' : 'Promoções'}</button>
      </div>

      <div className="container">
        <div className="row">
        {
          products.map(product => (
            <Product 
              key={product.code_color} 
              item={product}
              buy={props.buy}
            />
          ))
        }
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({products}) => products

const mapDispatchToProps = (dispatch => ({
  buy (product) {
    dispatch(addProduct(product))
    dispatch(changeTotal())
  },

  filter () {
    dispatch(filterProducts())
  }
}))

export default connect(mapStateToProps, mapDispatchToProps)(Products)