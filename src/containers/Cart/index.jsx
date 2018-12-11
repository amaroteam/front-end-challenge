import React from 'react';

import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductListItem from '../../components/Product/ProductListItem';
import {
  addQuantityThunk,
  removeQuantityThunk,
  removeItemThunk,
} from '../../store/ducks/thunks';
import { groupRepeatedProducts, sumItemsPrice } from '../../utils/productHandler';
import './Cart.scss';

const Cart = ({
  items,
  addQuantityConnected,
  removeQuantityConnected,
  removeItemConnected,
}) => (
  <div className="cart">
    <div className="product__list">
      { items.length > 0
        ? (items
          .reduce(groupRepeatedProducts, [])
          .map(product => (
            <ProductListItem
              item={product}
              key={uuidv1()}
              onClickAdd={addQuantityConnected}
              onClickRemove={removeQuantityConnected}
              onClickDropItem={removeItemConnected}
            />
          ))
        ) : (<span className="cart__empty">Sua sacola está vazia :\</span>)
      }
    </div>

    <div className="cart__subtotal">
      <div className="header__title">
        {`Subtotal - R$ ${sumItemsPrice(items)}`}
      </div>
    </div>
  </div>
);

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
  addQuantityConnected: PropTypes.func,
  removeQuantityConnected: PropTypes.func,
  removeItemConnected: PropTypes.func,
};

Cart.defaultProps = {
  items: [],
  addQuantityConnected: () => {},
  removeQuantityConnected: () => {},
  removeItemConnected: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addQuantityConnected: addQuantityThunk,
  removeQuantityConnected: removeQuantityThunk,
  removeItemConnected: removeItemThunk,
}, dispatch);

const mapStateToProps = store => ({
  items: store.cart.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
