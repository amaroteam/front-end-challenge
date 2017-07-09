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

    dispatch(cartAddProduct(this.props.products[this.productPos]))
  }

  render () {

    this.productStyle = this.props.match.params.id
    this.productPos = this.props.products.findIndex((product) => product.style === this.productStyle)

    return (
      <div className="product-details">
        {this.props.products[this.productPos] && <p>{this.props.products[this.productPos].name}</p>}
        <button onClick={this.onclick_handler}>Add to Cart</button>
        <Link to='/shopping-cart'>View Cart</Link>
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
