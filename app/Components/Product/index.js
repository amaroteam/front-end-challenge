import React from 'react'

/**
 * Price.
 */
function price (product) {
  if (product.on_sale) {
    return (
      <div className="price">
        <p>De: {product.regular_price}</p>
        <p>Por: {product.actual_price}</p>
      </div>
    )
  }

  return (
    <div className="price">
      <p>{product.actual_price}</p>
    </div>
  )
}

/**
 * Return only availables options.
 *
 * @param  {Object} product
 * @return {Array}
 */
function options (product) {
  return product.sizes.filter(size => size.available)
}

const Product = (product) => (
  <div className="product-card" key={product.code_color}>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    {price(product)}
    {
      options(product).map(option => (
        <span key={option.sku}>{option.size} - </span>
      ))
    }
  </div>
)

export default Product
