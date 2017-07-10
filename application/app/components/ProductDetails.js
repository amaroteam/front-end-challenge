import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

import { cartAddProduct } from '../actions'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  onclick_handler = () => {
    const { dispatch } = this.props

    dispatch(cartAddProduct(this.product))
  }

  renderProductDetails () {
    return (
      <div className="info">
        <h3>{this.product.name}</h3>

        {this.product.on_sale &&
          <p>De: {this.product.regular_price}<br/><strong>Por: {this.product.actual_price}</strong></p>}
        {!this.product.on_sale && <p>{this.product.actual_price}</p>}

        <div className="sizes">
          {this.renderSizes()}
        </div>

      </div>
    )
  }

  renderSizes () {
    return this.product.sizes.map((size, index) => {
      const classname = (size.available) ? 'size' : 'size unavailable'
      return (
        <div className={classname} key={index}>
          {size.available && <spam>{size.size}</spam>}
          {!size.available && <spam>{size.size}</spam>}
        </div>
      )
    })
  }

  render () {

    this.productStyle = this.props.match.params.id
    this.productPos = this.props.products.findIndex((product) => product.style === this.productStyle)

    this.product = this.props.products[this.productPos]

    return (
      <div className="product-details">
        {this.product && <img src={this.product.image}/>}
        {this.product && this.renderProductDetails()}

        <button onClick={this.onclick_handler}>Add to Cart</button>
        <Link to="/"><button>Back to List</button></Link>

      </div>
    )
  }
}

ProductDetails.propTypes = {
  products: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    products: state.products.products,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: bindActionCreators(cartAddProduct, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
