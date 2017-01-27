import React from 'react'

const Product = (product) => (
  <p key={product.code_color}>
    {product.name}
  </p>
)

export default Product
