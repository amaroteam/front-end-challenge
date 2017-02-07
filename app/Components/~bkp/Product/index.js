import React from 'react'

function formatPrice (product) {
  if (product.on_sale) {
    return (
      <div className="prices">
        <p className="sale"><del>De: {product.regular_price}</del></p>
        <p>Por: {product.actual_price}</p>
        <p><small>{product.installments}</small></p>
      </div>
    )
  }

  return (
    <div className="prices">
      <p>{product.actual_price}</p>
      <p><small>{product.installments}</small></p>
    </div>
  )
}

function filterOptions (product) {
  return product.sizes.filter(size => size.available)
}

function handleOption (option, product) {
  if (!product.cart) {
    product.cart = []
  }

  return product.cart = [...product.cart, option]
}

const Product = (product, handleCart) => (
  <div key={product.code_color} className="product-card">
    <figure className="product-cover">
      <img className="image" src={product.image} alt={product.name} />
    </figure>

    <div className="product-info">
      <h2 className="title">{product.name}</h2>

      <div className="product-meta">
        {formatPrice(product)}
        {
          filterOptions(product).map(option => (
            <div key={option.sku} className="option">
              <input
                className="options"
                type="radio"
                id={option.sku}
                name={`product-${product.style}`}
                onChange={() => handleOption(option, product)}
                hidden
              />
              <label htmlFor={option.sku}>{option.size}</label>
            </div>
          ))
        }
      </div>
    </div>

    <button className="to-cart" onClick={event => handleCart(event, product)}>
      <span>adicionar ao carrinho</span>
      <span className="fa fa-cart-plus fa-2x"></span>
    </button>
  </div>
)

export default Product
