import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import '../../styles/components/SizeBullets.scss';

import Button from '../Button';

const SizeBullets = ({
  className = '',
  sizes = [],
  sizeSelected,
  activeIndex,
  onClick,
}) => {
  console.log(sizeSelected);
  return (
    <div className={`am-sizes ${className}`}>
      {sizes.map(({ size, available }, index) => (
        <Button
          key={shortid.generate()}
          onClick={onClick}
          disabled={!available}
          data-index={index}
          value={size}
          className={`am-sizes__bullet ${
            // eslint-disable-next-line eqeqeq
            activeIndex == index && sizeSelected ? 'is--selected' : ''
          }`}
        >
          {size}
        </Button>
      ))}
    </div>
  );
};

export default connect(state => ({
  sizeSelected: state.quickview.size,
}))(SizeBullets);
