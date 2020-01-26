import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import '../../styles/components/FilterOptions.scss';

const FilterOptions = ({
  toggle,
  onClick,
  onKeyPress,
  activeIndex,
}) => {
  const listItem = [
    {
      filter: 'BEST_PRICE',
      name: 'Menor preço',
    },
    {
      filter: 'BIGGEST_PRICE',
      name: 'Maior preço',
    },
    {
      filter: 'DISCOUNT',
      name: 'Maior disconto',
    },
  ];
  return (
    <ul
      className={`am-filter-options ${toggle ? 'is--active' : ''}`}
      role="menu"
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      {listItem.map(({ filter, name }, index) => (
        <li
          key={shortid.generate()}
          data-value={filter}
          data-index={index}
          className={`am-filter-options__item ${
            // eslint-disable-next-line eqeqeq
            activeIndex == index ? 'is--active' : ''
          }`}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default connect(state => ({
  toggle: state.filter,
}))(FilterOptions);
