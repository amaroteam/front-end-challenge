import React, { useEffect, useState } from 'react';

import api from '../../service/api';

import Container from '../../layout/Container';
import ProductsShelf from '../../containers/ProductsShelf';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get('/products');
      const { data } = response;
      return setProducts(data);
    } catch (error) {
      console.log('bar', error);
    }
    return false;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return (
    <Container>
      <ProductsShelf content={products} />
    </Container>
  );
};
export default HomePage;
