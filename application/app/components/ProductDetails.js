import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {

    const productPos = this.props.products.map(
      product => {return product.style}).indexOf(this.props.match.params.id)

    const product = this.props.products[productPos];

    return (
      <div className="product-details">
        <p>{product.name}</p>
      </div>
    )
  }
}

ProductDetails.propTypes = {
  products: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

function mapStateToProps (state) {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(ProductDetails)
// Access the state to load product item by route id.

// Dispatches action to add product to shopping cart
