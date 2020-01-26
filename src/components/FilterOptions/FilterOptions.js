/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import '../../styles/components/FilterOptions.scss';

const FilterOptions = ({ visible, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ul
      onClick={onClick}
      className={`am-filter-options ${visible ? 'is--active' : ''}`}
    >
      <li className="am-filter-options__item" data-value="lowest">
        Menor Preço
      </li>
      <li className="am-filter-options__item" data-value="highest">
        Maior Preço
      </li>
      <li className="am-filter-options__item" data-value="discount">
        Maior Desconto
      </li>
    </ul>
  );
};

export default FilterOptions;
