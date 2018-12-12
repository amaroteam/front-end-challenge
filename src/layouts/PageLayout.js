import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const PageLayout = props => {
  const { children } = props;

  return (
    <div className="App__container">
      <Header />

      <section className="App__products">
        <div className="App__products__wrapper">{children}</div>
      </section>
    </div>
  );
};

PageLayout.propTypes = propTypes;

export default PageLayout;
