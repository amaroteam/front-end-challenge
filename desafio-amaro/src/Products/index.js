import React, { Component } from 'react';
import ProductsTable from './ProductsTable';
import ModalCart from './ModalCart';
import json from './products.json';
import PubSub from 'pubsub-js';

export default class Products extends Component {

  constructor() {

    super();
    this.state = { products: json.products, name: [], price: [], image: [] };
  }

  componentDidMount() {

    PubSub.subscribe('name', (topic, newList) => this.setState({ name: newList }) );
    PubSub.subscribe('price', (topic, newList) => this.setState({ price: newList }) );
    PubSub.subscribe('image', (topic, newList) => this.setState({ image: newList }) );
  }

  render() {
    return(

      <div>
        <div className="header">
          <h1>Produtos</h1>
          <button id="myBtn">Open Cart</button>
        </div>

        <div className="content" id="content">
          <ProductsTable products={this.state.products}/>
        </div>
        <ModalCart name={this.state.name} price={this.state.price} image={this.state.image}/>
      </div>
    );
  }
}
