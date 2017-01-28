import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import $ from 'jquery';

export default class ProductsTable extends Component {

  constructor() {

    super();
    this.state = { productName: [], productPrice: [], productImage: []};
    this.sendToCart = this.sendToCart.bind(this);
    this.selectForm = this.selectForm.bind(this);
  }

  selectForm(number) {

    number = `#${number}`;
    let form = $(number);
    let obj = {
      name: form[0].querySelector("#name").value,
      price: form[0].querySelector("#price").value,
      image: form[0].querySelector("#image").value
    }

    return obj;
  }

  sendToCart(pos, event) {

    event.preventDefault();

    this.setState({productName: this.selectForm(pos).name });
    PubSub.publish('name', this.state.productName);

    this.setState({productPrice: this.selectForm(pos).price });
    PubSub.publish('price', this.state.productPrice);

    this.setState({productImage: this.selectForm(pos).image });
    PubSub.publish('image', this.state.productImage);

    console.log(this.state);
  }

  render() {
    return(

      <div>
        <section className="products">
          {
            this.props.products.map( (products, pos) =>
              (
                <div key={pos} className="product-card">
                  <div className="product-image">
                    <img id='images' role="presentation" src={products.image} value={products.image} />
                  </div>
                  <div className="product-info">
                    <form id={pos} onClick={(event) => this.sendToCart(pos, event)} >
                      <input id='name' type='hidden' name='name' value={products.name}/>
                      <input id='price' type='hidden' name='price' value={products.regular_price} />
                      <input id='image' type='hidden' name='image' value={products.image} />
                      <button type='submit'>{products.name}</button>
                    </form>
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
