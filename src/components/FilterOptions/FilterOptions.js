import React from 'react';

import '../../styles/components/FilterOptions.scss';

const FilterOptions = ({ visible }) => {
  return (
    <ul
      className={`am-filter-options ${visible ? 'is--active' : ''}`}
    >
      <li className="am-filter-options__item" data-value="lowest">
        <span>Menor Preço</span>
      </li>
      <li className="am-filter-options__item" data-value="highest">
        <span>Maior Preço</span>
      </li>
      <li className="am-filter-options__item" data-value="discount">
        <span>Maior Desconto</span>
      </li>
    </ul>
  );
};

export default FilterOptions;
