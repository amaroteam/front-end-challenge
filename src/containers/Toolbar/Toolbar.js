import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FilterActionsCreator } from '../../store/ducks/filter';
import { Creators as OverlayActionsCreator } from '../../store/ducks/overlay';

import '../../styles/containers/Toolbar.scss';

import Container from '../../layout/Container';
import Button from '../../components/Button';
import FilterOptions from '../../components/FilterOptions';

const Toolbar = ({
  intro,
  visible,
  filterActions,
  overlayActions,
}) => {
  const [active, setActive] = useState(-1);

  const { toggleFilter, filterOption } = filterActions;
  const { toggleOverlay } = overlayActions;

  const handleToggleFilters = () => {
    if (visible) {
      toggleFilter(false);
      toggleOverlay(false);
    } else {
      toggleFilter(true);
      toggleOverlay(true);
    }
  };

  const handleFilterOption = ev => {
    const { value, index } = ev.target.dataset;
    setActive(index);
    filterOption(value);
    toggleFilter(false);
    toggleOverlay(false);
  };

  return (
    <div className="am-toolbar">
      <Container className="am-toolbar__wrapper">
        <nav className="am-toolbar__nav">
          <span className="am-toolbar__nav-itens">
            <strong>3003 </strong>
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
  visible: state.filter.toggle,
  overlay: state.overlay,
});

const mapDispatchToProps = dispatch => ({
  filterActions: bindActionCreators(FilterActionsCreator, dispatch),
  overlayActions: bindActionCreators(OverlayActionsCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
