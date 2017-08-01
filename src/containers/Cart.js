import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getTotal, applyCurrencyMask, getQuantityItemsInCart } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        total: applyCurrencyMask(getTotal(state, props)),
        quantity: getQuantityItemsInCart(state)
    }
}

export default connect(mapStateToProps)(Cart);
