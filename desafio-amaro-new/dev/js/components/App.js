import React from 'react';
import ProductList from '../containers/product-list';
import Cart from '../containers/cart';
import { Link } from 'react-router';
require('../../scss/side-menu.scss');
require('../../scss/pure-min.scss');
require('../../scss/products.scss');
require('../../scss/modal.scss');


const App = () => (
  <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
      </a>

      <div id="menu">
          <div className="pure-menu">
              <Link className="pure-menu-heading" to="#">AMARO <span className='pure-menu-heading-inverted'>Week</span></Link>

              <ul className="pure-menu-list">
                  <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                  <li className="pure-menu-item"><Link to="/products" className="pure-menu-link">Produtos</Link></li>
              </ul>
          </div>
      </div>

      <div id="main">
        <div>
          <div className="header">
            <h1>Produtos</h1>
            <button id="myBtn">Open Cart</button>
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
          <table className="pure-table pure-table-horizontal">
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>
              <Cart />
          </table>
          </div>
        </div>
      </div>
      </div>
  </div>
);

export default App;
