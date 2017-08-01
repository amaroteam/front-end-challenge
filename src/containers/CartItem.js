import { connect } from 'react-redux';
import CartItem from '../components/Cart/CartItem';
import { removeFromCart, addToCart, isInCart } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
