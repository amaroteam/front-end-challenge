import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const HeaderDiv = styled.div`
  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #000;
  }

  li {
      float: left;
  }

  li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }

  li a:hover:not(.active) {
      background-color: #404040;
  }

  .right {
    float: right;
  }

  .active {
      background-color: #404040;
  }

  @media screen and (max-width: 600px){
    ul, li, li.right {
      float: none;
    }
}
`

const Header = ({cartProductsQuantity}) => {
  return (
    <HeaderDiv>
      <ul>
        <Link to ="/catalog">
          <li><a className="active">Products</a></li>
        </Link>
        <Link to ="/shoppingCart">
          <li className="right"><a>Cart {cartProductsQuantity}</a></li>
        </Link>
      </ul>
    </HeaderDiv>
  )
}

Header.propTypes = {
  cartProductsQuantity: PropTypes.number.isRequired
}
export default Header;
