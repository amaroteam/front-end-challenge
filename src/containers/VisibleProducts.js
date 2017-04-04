import { connect } from 'react-redux'
import { addToCart } from '../actions'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products, filter) => {

  switch(filter) {

    case 'ALL':
      return products

    case 'ON_SALE':
      return products.filter(p => p.on_sale)

  }

}

const mapStateToProps = state => {
  return {
    products: getVisibleProducts(state.products, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddedToCart(id) {
      dispatch(addToCart(id))
    }
  }
}

const VisibleProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)

export default VisibleProductList