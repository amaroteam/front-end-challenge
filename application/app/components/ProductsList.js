import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

import { setProductsListFilter } from '../actions'

class ProductsList extends React.Component {
  constructor (props) {
    super(props)
  }

  renderProductsList () {
    return this.props.products.map((item, index) => {

      const styles = {
        backgroundImage: `url(${item.image}`
      }

      if(this.props.activeFilter === 'on_sale' && !item.on_sale) return

      return (
        <div className="product" key={index} style={styles}>
          <Link to={`/product/${item.style}`}>
            <h2>{item.name}</h2>
          </Link>
        </div>
      )
    })
  }

  clickFilterHandler = (filter) => {
    const { dispatch } = this.props

    dispatch(setProductsListFilter(filter))
  }

  render () {

    const allClassname = (this.props.activeFilter === 'all') ? 'filter active' : 'filter'
    const saleClassname = (this.props.activeFilter === 'on_sale') ? 'filter active' : 'filter'

    return (
      <div className="products-list">
        <div className="filters">
          <div onClick={()=>this.clickFilterHandler('all')} className={allClassname}>all</div>
          <div onClick={()=>this.clickFilterHandler('on_sale')} className={saleClassname}>on sale</div>
        </div>
        {this.renderProductsList()}
      </div>
    )
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
}

function mapStateToProps (state) {
  return {
    products: state.products.products,
    activeFilter: state.listFilter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: bindActionCreators(setProductsListFilter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)

// Access state to display products list.

// Access state to get the current filter.
// Dispatches action to set the current filter.
