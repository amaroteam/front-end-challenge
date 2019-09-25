import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await api.get('products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts(products);
  }, [products]);

  const dispatch = useDispatch();

  function handleAddProduct(product) {
    dispatch(CartActions.addToCart(product));
  }

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  return (
    <ProductList>
      {products.map(product => (
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
              {amount[product.id] || 0}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
