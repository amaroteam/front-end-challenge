import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../services/api";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

import * as CartActions from "../../store/modules/Cart/actions";

export default function Home() {

  const [products, setProducts] = useState([]);
  const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    sumAmount[product.code_color] = product.amount;
    return sumAmount;
  }, {}))

  const dispatch = useDispatch();
  
  useEffect(() => {
    async function loadProducts() {
      const response = getProducts();  
      setProducts(response);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.code_color}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span className="discount-applied">{product.discount_percentage && `De: ${product.regular_price} por ` }</span>
          <span>{product.actual_price}</span>
          <button
            type="button"
            onClick={() => handleAddProduct(product.code_color)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{" "}
              {amount[product.code_color] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
