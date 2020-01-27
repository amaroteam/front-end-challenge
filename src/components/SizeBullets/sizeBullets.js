import React from 'react';
import shortid from 'shortid';

import '../../styles/components/SizeBullets.scss';

import Button from '../Button';

const SizeBullets = ({
  className = '',
  sizes = [],
  activeIndex,
  onClick,
}) => {
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
            activeIndex == index ? 'is--selected' : ''
          }`}
        >
          {size}
        </Button>
      ))}
    </div>
  );
};

export default SizeBullets;
