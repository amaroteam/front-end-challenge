import { connect } from 'react-redux'
import CartList from '../components/CartList'
import { removeFromCart, increment, decrement } from '../actions'

const mapStateToProps = state => {
  return { items: state.cart }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemove(id) {
      dispatch(removeFromCart(id))
    },
    onIncrement(id) {
      dispatch(increment(id))
    },
    onDecrement(id) {
      dispatch(decrement(id))
    }
  }
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList)

export default Cart