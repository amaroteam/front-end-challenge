import React from 'react';
import { connect } from 'react-redux';

import '../../styles/components/FilterOptions.scss';

const FilterOptions = ({ toggle, onClick }) => {
  return (
    <ul
      className={`am-filter-options ${toggle ? 'is--active' : ''}`}
      role="menu"
      onClick={onClick}
      onKeyPress={() => {}}
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

export default connect(state => ({
  toggle: state.filter.toggle,
}))(FilterOptions);
