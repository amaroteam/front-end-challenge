import React from 'react'
import Product from './Product'

const { array, func, string } = React.PropTypes

const ProductList = ({ products, defaultImage, onAddedToCart }) => (
  <div className="row">
    { products.map( p =>
        <Product
          key={ p.id }
          defaultImage={ defaultImage }
          { ...p }
          onAddToCart={onAddedToCart}
        /> ) }
  </div>
)

ProductList.PropTypes = {
  products: array.isRequired,
  defaultImage: string.isRequired,
  onAddedToCart: func
}

export default ProductList