import React from 'react';
import { products } from '../data/products.json';
import ProductCard from './ProductCardComponent'

const Catalog = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", flexFlow: "row wrap"}}>
      {products.map((product, id) => {
        return (
          <ProductCard key={id} product={product} /> // como o json de produtos não tem id para ser identificado, estou usando o nome
        )
      })}
    </div>
  )
}

export default Catalog;
