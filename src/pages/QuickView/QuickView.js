import React from 'react';

import '../../styles/containers/QuickView.scss';

import Modal from '../../components/Modal';
import ProductInfos from '../../containers/ProductInfos';

const QuickView = () => {
  return (
    <Modal className="am-quick-view is--active">
      <ProductInfos
        name="bolsa bonita amaro"
        image="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
        regularPrice="R$ 190,00"
        actualPrice="R$ 190,00"
        installments="3x R$ 40,00"
        color="https://cdn.amaro.com/uploads/icons/20002605_613.gif"
        colorName="Vermelho"
      />
    </Modal>
  );
};

export default QuickView;
