import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as OverlayActions } from '../../store/ducks/overlay';

import '../../styles/containers/Toolbar.scss';

import Container from '../../layout/Container';
import Button from '../../components/Button';
import FilterOptions from '../../components/FilterOptions';

const Toolbar = ({ intro, toggleOverlay }) => {
  // console.log(activeOverlay());
  const [toggleOpen, setToggleOpen] = useState();
  const [filter, setFilter] = useState('');

  const handleToggleFilters = () => {
    if (!toggleOpen) {
      toggleOverlay(true);
      setToggleOpen(true);
    } else {
      setToggleOpen(false);
      toggleOverlay(false);
    }
  };

  const handleFilter = ev => {
    const { target } = ev;
    const currentFilter = target.dataset.value;
    setFilter(currentFilter);
    setToggleOpen(false);
    toggleOverlay(false);
  };
  console.log('filter', filter);

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
              className="am-toolbar__nav-filter-button"
              type="button"
              onClick={() => handleToggleFilters()}
            >
              Ordernar
            </Button>
            <FilterOptions
              visible={toggleOpen}
              onClick={ev => handleFilter(ev)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(OverlayActions, dispatch);

export default connect(null, mapDispatchToProps)(Toolbar);
