import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";

import { getProducts } from "../../services/api";
import { ProductList } from "./styles";
import Product from '../../components/Product'

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = getProducts();
      setProducts(response);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
       <Product key={product.code_color} product={product}/> 
      ))}
    </ProductList>
  )
}
