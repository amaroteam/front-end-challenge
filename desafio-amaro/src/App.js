import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/products.css';
import './css/modal.css';

export default class App extends Component {

  render() {
    return (
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
              {this.props.children}
          </div>
      </div>
    );
  }
}
