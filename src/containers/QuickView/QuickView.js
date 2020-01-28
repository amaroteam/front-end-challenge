import React from 'react';

import { connect } from 'react-redux';

import '../../styles/containers/QuickView.scss';

import Modal from '../../components/Modal';
import ProductInfo from '../../components/ProductInfo';

const QuickView = ({ toggle, product = {} }) => {
  const {
    name,
    image,
    installments,
    color,
    sizes,
    regular_price: regularPrice,
    actual_price: actualPrice,
    discount_percentage: discount,
    bullet_color: bulletColor,
  } = product;

  return (
    <Modal className={`am-quick-view ${toggle ? 'is--active' : ''}`}>
      <ProductInfo
        name={name}
        image={image}
        regularPrice={regularPrice}
        actualPrice={actualPrice}
        installments={installments}
        color={bulletColor}
        colorName={color}
        discount={discount}
        sizes={sizes}
      />
    </Modal>
  );
};

const mapStateToProps = state => ({
  toggle: state.quickview.toggle,
  product: state.quickview.data,
});

export default connect(mapStateToProps, null)(QuickView);
