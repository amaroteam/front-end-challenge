import React, { Component } from 'react';
import {products} from '../data/products.json';

class Catalog extends Component {
  render() {
    console.log(products);
    return (
      <div>
        {products.map(product => {
          return (
            <div>
              {product.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Catalog;
