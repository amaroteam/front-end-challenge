import React from 'react';
import styled from 'styled-components'

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

  .active {
      background-color: #404040;
  }
`

const Header = () => {
  return (
    <HeaderDiv>
      <ul>
        <li><a className="active">Products</a></li>
        <li style={{float: 'right'}}><a>Cart</a></li>
      </ul>
    </HeaderDiv>
  )
}

export default Header;
