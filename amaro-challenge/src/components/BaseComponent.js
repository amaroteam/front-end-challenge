import React, { Component } from 'react';
import Header from './HeaderComponent';
import Catalog from './CatalogComponent';

class Base extends Component {

  render() {
    return (
      <div>
        <Header />
        <Catalog />
        {this.props.children}

      </div>
    )
  }
}

export default Base;
