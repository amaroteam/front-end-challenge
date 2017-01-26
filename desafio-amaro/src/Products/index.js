import React, { Component } from 'react';
import json from './products.json';
import PubSub from 'pubsub-js';

export default class Products extends Component {

  constructor() {

    super();
    this.state = { products: json.products };
  }

  render() {
    return(

      <div>
        <div className="header">
          <h1>Produtos</h1>
        </div>
        <div className="content" id="content">
          <ProductTable products={this.state.products}/>
        </div>
      </div>
    );
  }
}

class ProductTable extends Component {

  render() {
    return(

      <div>
        <section className="products">
          {
            this.props.products.map( products =>
              (
                <div className="product-card">
                  <div className="product-image">
                    <img src={products.image} />
                  </div>
                  <div className="product-info">
                    <input type="button" value={products.name} onClick=""/>
                    <div className="price">
                      <h4>{products.regular_price}</h4>
                      <h6>{products.installments}</h6>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </section>
      </div>
    );
  }
}
