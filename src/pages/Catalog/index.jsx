import React, { Fragment } from 'react';

import HeaderDefault from '../../containers/Header/HeaderDefault';
import Products from '../../containers/Products';

const Catalog = () => (
  <Fragment>
    <HeaderDefault />
    <Products />
  </Fragment>
);

export default Catalog;
