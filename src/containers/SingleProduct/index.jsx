import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadProductThunk as loadProduct,
  sizeSelectorThunk,
  addToCartThunk,
} from '../../store/ducks/thunks';
import ProductImage from '../../components/Product/ProductImage';
import ProductContent from '../../components/Product/ProductContent';
import './SingleProduct.scss';

const SingleProduct = ({
  pathname,
  product,
  selectedSize,
  selectSizeConnected,
  loadProductConnected,
  addToCartConnected,
  sizeIsMissing,
}) => (
  <div
    className="single-product"
    onLoad={() => loadProductConnected(pathname)}
  >
    <ProductImage
      {...product}
      onSale={product.on_sale}
      discount={product.discount_percentage}
    />
    <ProductContent
      {...product}
      selectedSize={selectedSize}
      onClickSize={selectSizeConnected}
      onClickAdd={addToCartConnected}
      onSale={product.on_sale}
      sizeWasNotSelected={sizeIsMissing}
    />
  </div>
);

SingleProduct.propTypes = {
  pathname: PropTypes.string.isRequired,
  product: PropTypes.shape().isRequired,
  loadProductConnected: PropTypes.func.isRequired,
  addToCartConnected: PropTypes.func.isRequired,
  selectedSize: PropTypes.string,
  sizeIsMissing: PropTypes.bool,
};

SingleProduct.defaultProps = {
  selectedSize: '',
  sizeIsMissing: false,
};

const mapStateToProps = store => ({
  pathname: store.router.location.pathname,
  product: store.single.product,
  selectedSize: store.single.selectedSize,
  sizeIsMissing: store.cart.sizeIsMissing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadProductConnected: loadProduct,
  selectSizeConnected: sizeSelectorThunk,
  addToCartConnected: addToCartThunk,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
