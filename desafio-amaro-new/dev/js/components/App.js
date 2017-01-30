import React, { Component } from 'react';
import ProductList from '../containers/product-list';
import Cart from '../containers/cart';
import { Link } from 'react-router';
require('../../scss/side-menu.scss');
require('../../scss/pure-min.scss');
require('../../scss/products.scss');
require('../../scss/modal.scss');
require('../../scss/base-min.scss');
require('../../scss/grids-min.scss');
require('../../scss/grids-responsive-min.scss');

export default class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      header: 'header-menu disable-header'
    }
  }

  componentDidMount() {
      // Get position scroll page
      window.addEventListener('scroll', (event)=>{
        let pos = event.target.scrollingElement.scrollTop;
        this.setState({header: pos > 300 ? 'header-menu' : 'header-menu disable-header' });
      });
  }

  render(){

    return(

      <div id="layout">
      <div className={this.state.header}>
        <div className="title">AMARO</div>
        <div className="cartButton" id="cartButton">Cart</div>
      </div>
      <div className= "header-banner">
        <h1 className="banner">
          BEM VINDO!
          <br />
          Uma simples application feita para você! :)
        </h1>
      </div>
          <div id="main">
            <div>
              <div className="header">
                <h1>Produtos</h1>
              </div>
              <div className="content" id="content">
                <ProductList />
              </div>
            </div>
          </div>
          <div>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <span className="close">&times;</span>
                <h2>Cart</h2>
              </div>
              <div className="modal-body">
                <Cart />
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}
