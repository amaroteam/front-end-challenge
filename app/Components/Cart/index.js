import React from 'react'

export default class Cart extends React.Component {
  componentWillUpdate () {
    console.log(this.props.products)
    const quantity = this.props.products.length
  }

  render () {
    return (
      <button className="main-cart">
        <span className="fa fa-shopping-cart"></span>
        {
          <span className="badge-quantities">{this.props.products.length}</span>
        }
      </button>
    )
  }
}
