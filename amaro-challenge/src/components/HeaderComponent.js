import React, { Component } from 'react';
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
    margin-left: 90px;
    float: left;
    text-transform: uppercase;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 14px;
    text-decoration: none;
  }

  .catalog a:hover:not(.active) {
    border-bottom: 2px solid;
    padding-bottom: 2px;
  }

  .cart {
    float: right;
    margin-right: 90px;
  }
  .cart i {
    margin-right: 15px;
  }

  .active {
    border-bottom: 2px solid;
    padding-bottom: 2px;
  }

  @media screen and (max-width: 768px) {
    li {
      margin: 0;
      margin-left: 50px;
    }
    .cart {
      margin: 0;
      margin-right: 50px;
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

  @media screen and (max-width: 768px) {
    h1 {

    }
  }
`

const LockSideBar = styled.div `
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1
`

const lockTopBarStyle = {
  overflow: "hidden",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1
}

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      catalogSelected: false
    }
  }

  render () {
    const {cartProductsQuantity, isTopBarFixed} = this.props;
    return (
      <div>
        <HeaderTitle>
          <Link style={{textDecoration: "none"}} to="/">
            <h1>Amaro Challenge</h1>
          </Link>
        </HeaderTitle>
        <HeaderDiv style={isTopBarFixed ? lockTopBarStyle : null}>
          <ul>
            <Link to ="/catalog">
              <li className="catalog" onClick={() => this.setState({catalogSelected: true})}>
                <a className={this.state.catalogSelected ? "active" : null}>Catalog</a>
              </li>
            </Link>
            <Link to ="/shoppingCart">
              <li className="cart" onClick={() => this.setState({catalogSelected: false})}>
                <a><i className="fa fa-shopping-bag" aria-hidden="true"></i>{cartProductsQuantity}</a>
              </li>
            </Link>
          </ul>
        </HeaderDiv>

      </div>
    )
  }

}

Header.propTypes = {
  cartProductsQuantity: PropTypes.number.isRequired
}
export default Header;
