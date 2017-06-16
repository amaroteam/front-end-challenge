import React from 'react';
import { products } from '../data/products.json';
import ProductCard from './ProductCardComponent'

const Catalog = () => {
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

export default Catalog
