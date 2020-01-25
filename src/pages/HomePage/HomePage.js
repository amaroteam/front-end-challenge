import React, { useEffect, useState } from 'react';

import '../../styles/pages/HomePage.scss';

import api from '../../service/api';

import ProductsShelf from '../../containers/ProductsShelf';
import Toolbar from '../../containers/Toolbar';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get('/products');
      const { data } = response;

      const items = data.map(product => ({
        ...product,
        link: product.name.replace(/\s+/g, '-').toLowerCase(),
        bullet_color: `https://cdn.amaro.com/uploads/icons/${product.code_color}.gif`,
      }));

      return setProducts(items);
    } catch (error) {
      console.log('bar', error);
    }
    return false;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Toolbar title="Produtos" />
      <ProductsShelf content={products} />
    </>
  );
};
export default HomePage;
