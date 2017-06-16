import React, { Component } from 'react';
import {products} from '../data/products.json';
import ProductCard from './ProductCardComponent'

class Catalog extends Component {
  render() {
    console.log(products);
    return (
      <div>
        {products.map((product, id) => {
          return (
            <ProductCard key={id} product={product} />
          )
        })}

      </div>
    )
  }
}

export default Catalog;
