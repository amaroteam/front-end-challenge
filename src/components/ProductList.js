import React from 'react'
import Product from './Product'

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

export default ProductList