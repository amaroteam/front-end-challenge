import React from 'react'

export default class Product extends React.Component {
  constructor () {
    super()
  }

  /**
   * Return formatted string for prices.
   */
  formattedPrices () {
    if (this.props.product.on_sale) {
      return (
        <div className="prices">
          <p className="sale"><del>De: {this.props.product.regular_price}</del></p>
          <p>Por: {this.props.product.actual_price}</p>
          <p><small>{this.props.product.installments}</small></p>
        </div>
      )
    }

    return (
      <div className="prices">
        <p>{this.props.product.actual_price}</p>
        <p><small>{this.props.product.installments}</small></p>
      </div>
    )
  }

  /**
   * Return only availables options.
   *
   * @param  {Object} product
   * @return {Array}
   */
  options () {
    return this.props.product.sizes.filter(size => size.available)
  }

  render () {
    return (
      <div className="product-card">
        <figure className="product-cover">
          <img className="image" src={this.props.product.image} alt={this.props.product.name} />
        </figure>

        <div className="product-info">
          <h2 className="title">{this.props.product.name}</h2>

          <div className="product-meta">
            {this.formattedPrices()}
            {
              this.options().map(option => (
                <div key={option.sku} className="option">
                  <input type="checkbox" id={option.sku} hidden />
                  <label htmlFor={option.sku}>{option.size}</label>
                </div>
              ))
            }
          </div>
        </div>

        <button className="to-cart" onClick={() => this.props.cart(this.props.product)}>
          <span>adicionar ao carrinho</span>
          <span className="fa fa-cart-plus fa-2x"></span>
        </button>
      </div>
    )
  }
}
