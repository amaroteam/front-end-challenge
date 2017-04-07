import React from 'react'
import Product from './Product'

const { array, func } = React.PropTypes

const ProductList = ({ products, onAddedToCart }) => (
  <div>
    {
      products.map( p =>
        <Product
          key={ p.id }
          { ...p }
          onAddToCart={onAddedToCart}
        />
      )
    }
  </div>
)

ProductList.PropTypes = {
  products: array.isRequired,
  onAddedToCart: func
}

export default ProductList