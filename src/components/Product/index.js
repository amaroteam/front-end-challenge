import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MdAddShoppingCart } from "react-icons/md";
import Logo from '../../assets/Amaro_logo.png'
import * as CartActions from "../../store/modules/Cart/actions";

export default function Product({ product }) {

  const [productSize, setProductSize] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    sumAmount[product.code_color] = product.amount;
    return sumAmount;
  }, {}))

  const dispatch = useDispatch();

  const handleAddProduct = id => {
    if(productSize) {
      dispatch(CartActions.addToCartRequest(id, productSize));
      setShowAlert(false)
    } else {
      setShowAlert(true)
    }
  };

  return (
    <li className="product-item" >
      {
        product.on_sale &&
        <div className="discount-stamp">
          <span>{product.discount_percentage}</span>
          <span>OFF</span>
        </div>
      }
      <img src={product.image || Logo} alt={product.name} />
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
              <input disabled={!size.available} 
                type="radio" 
                name={product.code_color} 
                id={product.code_color + size.size} 
                onChange={() => setProductSize(size)}></input>
              <label htmlFor={product.code_color + size.size}>{size.size}</label>
            </li>)
          })
        }
      </ul>
      {showAlert && <span className="alert-size">Escolha um tamanho</span>}
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
  )
}
