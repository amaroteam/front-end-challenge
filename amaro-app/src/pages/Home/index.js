import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { ProductList } from './styles';

export default function Home() {
  const [productsData, setProductsData] = useState([]);

  useEffect(async () => {
    const response = await api.get('products');
    setProductsData(response.data);
  }, []);

  return (
    <ProductList>
      {productsData.map(product => (
        <li key={product.id}>
          <img
            alt={product.name + product.color - product.slug}
            src={product.image}
          />
          <strong>{product.name}</strong>
          <span>{product.regular_price}</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#000" />2
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
