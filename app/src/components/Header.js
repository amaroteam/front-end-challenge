import React from 'react'
import { connect } from 'react-redux'

import { searchProducts } from '../actions/productsActions'

import Logo from './Logo'

const Header = props => (
  <header className="header">
    <div className="container">
      <Logo width="150px" height="44px" color="#222" />
      <div className="header-meta">
        <input className="header-search" type="text" placeholder="filtrar" onChange={props.search} />
        <button className="header-cart" onClick={props.toggle}>
          <span className="header-count">{props.quantity}</span>
          <span className="ion-ios-cart-outline"></span>
        </button>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch => ({
  search (event) {
    dispatch(searchProducts(event.target.value))
  }
}))

export default connect('', mapDispatchToProps)(Header)