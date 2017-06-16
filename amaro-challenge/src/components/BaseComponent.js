import React, { Component } from 'react';
import Header from './HeaderComponent';
import App from './CatalogComponent';

class Base extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}

      </div>
    )
  }
}

export default Base;
