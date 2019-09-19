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
          {
            product.on_sale && 
          <div className="discount-stamp">
            <span>{product.discount_percentage}</span>
            <span>OFF</span>
          </div>
          }
          <img src={product.image} alt={product.name} />
          <strong>{product.name}</strong>
          {
            product.on_sale && 
              <span><del>{product.regular_price}</del></span>
          }
          <p>{product.actual_price}</p>
          <ul className="size-list">
            {
              product.sizes.map(size => {
                return (<li key={size.size}>
                <input type="radio" name={product.code_color} id={product.code_color+size.size} ></input>
                <label for={product.code_color+size.size}>{size.size}</label>
                </li>)
              })
            }

          </ul>
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
