import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../../styles/containers/QuickView.scss';

import Modal from '../../components/Modal';
import ProductInfos from '../../containers/ProductInfos';

const QuickView = ({ toggle, product = {} }) => {
  const [active, setActive] = useState(-1);
  const [size, setSize] = useState();
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

  const handleSizeSelected = ev => {
    const { index } = ev.target.dataset;
    const { value } = ev.target;
    setSize(value);
    setActive(index);
  };

  return (
    <Modal className={`am-quick-view ${toggle ? 'is--active' : ''}`}>
      <ProductInfos
        name={name}
        image={image}
        regularPrice={regularPrice}
        actualPrice={actualPrice}
        installments={installments}
        color={bulletColor}
        colorName={color}
        discount={discount}
        size={size}
        sizes={sizes}
        activeIndex={active}
        onClick={ev => handleSizeSelected(ev)}
      />
    </Modal>
  );
};

const mapStateToProps = state => ({
  toggle: state.quickview.toggle,
  product: state.quickview.data,
});

export default connect(mapStateToProps, null)(QuickView);
