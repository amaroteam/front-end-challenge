import React from 'react';
import styled from 'styled-components';


const ProductDiv = styled.div `
  float: left;
  box-shadow: 1px 5px 15px #CCC;
  width: 300px;
  height: 580px;
  border-radius: 3px;
  padding: 10px;
  margin: 30px;
  overflow: hidden;
  position: relative;
  flex: auto;
  img {
    max-width: 100%;
    height: auto
  }
`

const ProductCard = ({product}) => {
  return (
    <ProductDiv>
      <div>
        <img src={product.image} alt={product.name} width={300} />
        <p>{product.name}</p>
        <p>{product.regular_price}</p>
        <p>{product.installments}</p>
        <button>Add to cart</button>
      </div>
      <div>
        <h2>Added to basket</h2>
      </div>
    </ProductDiv>
  )
}

export default ProductCard
