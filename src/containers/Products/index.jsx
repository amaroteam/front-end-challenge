import React from 'react';
import uuidv1 from 'uuid/v1';
import Product from '../../components/Product';
import './Products.scss';

import { products } from '../../services/products.mock.json';

console.log(products);

const Products = () => (
  <section className="products">
    <div className="app__container">
      <div className="products__grid">
        {products.map(product => (
          <Product
            key={uuidv1()}
            className="products__box"
            {...product}
          />
        ))
        }
      </div>
    </div>
  </section>
);

export default Products;
