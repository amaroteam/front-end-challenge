import { connect } from 'react-redux';
import Header from '../components/Header';
import { getQuantityItemsInCart } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        quantity: getQuantityItemsInCart(state),
    }
}

export default connect(mapStateToProps)(Header);