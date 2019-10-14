import React from 'react';

import Modal from '.';

export default {
  component: Modal,
  title: 'Modal',
};

export const story = () => (
  <Modal shouldShow>
    <div style={{ width: 400, height: 500 }}>
      <p>TEXT</p>
    </div>
  </Modal>
);
