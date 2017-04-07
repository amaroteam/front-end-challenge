import { connect } from 'react-redux'
import CartList from '../components/CartList'
import { removeFromCart, increment, decrement } from '../actions'

const mapStateToProps = state => {
  return { items: state.cart }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoved(id) {
      dispatch(removeFromCart(id))
    },
    onIncremented(id) {
      dispatch(increment(id))
    },
    onDecremented(id) {
      dispatch(decrement(id))
    }
  }
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList)

export default Cart