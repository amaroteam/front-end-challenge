import React from 'react';

import '../../styles/components/SizeBullets.scss';

import Button from '../Button';

const SizeBullets = ({ className = '' }) => {
  return (
    <div className={`am-sizes ${className}`}>
      <Button className="am-sizes__bullet">40</Button>
    </div>
  );
};

export default SizeBullets;
