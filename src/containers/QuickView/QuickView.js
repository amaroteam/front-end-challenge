import React from 'react';

import '../../styles/containers/QuickView.scss';

import Modal from '../../components/Modal';

const QuickView = () => {
  return (
    <Modal className="is--active am-quick-view">
      <div className="am-quick-view__left"> left </div>
      <div className="am-quick-view__right"> right </div>
    </Modal>
  );
};

export default QuickView;
