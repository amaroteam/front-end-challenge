import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class ProductsList extends React.Component {
  constructor (props) {
    super(props)
  }

  renderProductsList () {
    return this.props.products.map((item, index) => {
      return (
        <div className="product" key={index}>
          {item.name}
        </div>
      )
    })
  }

  render () {
    return (
      <div className="products-list">
        {this.renderProductsList()}
      </div>
    )
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
}

function mapStateToProps (state) {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(ProductsList)

// Access state to display products list.

// Access state to get the current filter.
// Dispatches action to set the current filter.
