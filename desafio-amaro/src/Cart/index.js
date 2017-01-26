import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Cart extends Component {

  render() {
    return(

      <div>
        <div className="header">
          <h1>Carrinho</h1>
        </div>
        <div className="content" id="content">
          <h2>Produtos aqui.</h2>
        </div>
      </div>
    );
  }
}
