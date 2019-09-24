import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('products');
      setProductsData(response.data);
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();

  function handleAddProduct(product) {
    dispatch(CartActions.addToCart(product));
  }

  return (
    <ProductList>
      {productsData.map(product => (
        <li key={product.id}>
          <img
            alt={product.name + ' - ' + product.color + ' - ' + product.slug}
            src={product.image}
          />
          <strong>{product.name}</strong>
          <span>{formatPrice(product.regular_price)}</span>
          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#000" />
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
