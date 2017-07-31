import { connect } from 'react-redux';
import BadgesButton from '../components/Header/BadgesButton';
import { getQuantityItemsInCart } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        quantity: getQuantityItemsInCart(state),
    }
}

export default connect(mapStateToProps)(BadgesButton);