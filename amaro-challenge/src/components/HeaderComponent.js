import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const HeaderDiv = styled.div `
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

const HeaderTitle = styled.div `
  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #000;
    font-family: Gotham-Book,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
`

const Header = ({cartProductsQuantity}) => {
  return (
    <div>
      <HeaderTitle>
        <h1>Amaro Challenge</h1>
      </HeaderTitle>
      <HeaderDiv>
        <ul>
          <Link to ="/catalog">
            <li><a className="active">Products</a></li>
          </Link>
          <Link to ="/shoppingCart">
            <li className="right">
              <a><i className="fa fa-shopping-cart" aria-hidden="true" style={{color: "#FFFFFF", marginRight: 15}}></i>{cartProductsQuantity}</a>
            </li>
          </Link>
        </ul>
      </HeaderDiv>
    </div>
  )
}

Header.propTypes = {
  cartProductsQuantity: PropTypes.number.isRequired
}
export default Header;
