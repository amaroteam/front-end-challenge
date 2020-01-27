import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FilterActionsCreator } from '../../store/ducks/filter';
import { Creators as OverlayActionsCreator } from '../../store/ducks/overlay';
import { Creators as ProductsActionsCreator } from '../../store/ducks/products';

import '../../styles/containers/Toolbar.scss';

import Container from '../../layout/Container';
import Button from '../../components/Button';
import FilterOptions from '../../components/FilterOptions';

const Toolbar = ({
  intro,
  visible,
  filterActions,
  overlayActions,
  productsActions,
  quantity,
  overlay,
}) => {
  const [active, setActive] = useState(-1);

  const { toggleFilter } = filterActions;
  const { overlayToolBar } = overlayActions;
  const {
    orderByBestPrice,
    orderByBiggestPrice,
    orderByDiscount,
  } = productsActions;

  const handleToggleFilters = () => {
    if (visible) {
      toggleFilter(false);
      overlayToolBar(false);
    } else {
      toggleFilter(true);
      overlayToolBar(true);
    }
  };

  const handleFilterOption = ev => {
    const { value, index } = ev.target.dataset;
    setActive(index);
    toggleFilter(false);
    overlayToolBar(false);
    if (value === 'BEST_PRICE') {
      orderByBestPrice();
    }
    if (value === 'BIGGEST_PRICE') {
      orderByBiggestPrice();
    }
    if (value === 'DISCOUNT') {
      orderByDiscount();
    }
  };

  return (
    <div className="am-toolbar">
      <Container
        className={`am-toolbar__wrapper ${
          overlay ? 'is--active' : ''
        }`}
      >
        <nav className="am-toolbar__nav">
          <span className="am-toolbar__nav-itens">
            <strong>{quantity}</strong>
            itens
          </span>
          <div className="am-toolbar__nav-filter">
            <Button
              className={`am-toolbar__nav-filter-button ${
                visible ? 'is--active' : ''
              }`}
              type="button"
              onClick={() => handleToggleFilters()}
            >
              Ordernar
            </Button>
            <FilterOptions
              activeIndex={active}
              onClick={ev => handleFilterOption(ev)}
            />
          </div>
        </nav>
      </Container>
      <Container className="am-toolbar__wrapper">
        <h1 className="am-toolbar__intro">{intro}</h1>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  visible: state.filter,
  overlay: state.overlay.toolbar,
  quantity: state.products.data.length,
});

const mapDispatchToProps = dispatch => ({
  filterActions: bindActionCreators(FilterActionsCreator, dispatch),
  overlayActions: bindActionCreators(OverlayActionsCreator, dispatch),
  productsActions: bindActionCreators(
    ProductsActionsCreator,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
