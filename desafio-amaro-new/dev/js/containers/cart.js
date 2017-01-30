import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Component {

    constructor(props) {

      super(props);
      this.state = {
        product: []
      }
      this.addListProduct = this.addListProduct.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    componentDidMount() {

      let modal = document.getElementById('myModal');
      let btn = document.getElementById("myBtn");
      let span = document.getElementsByClassName("close")[0];

      btn.onclick = function() {
          modal.style.display = "block";
      }

      span.onclick = function() {
          modal.style.display = "none";
      }

      window.onclick = function(event) {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      }
    }

    forceUpdateHandler() {

      this.forceUpdate();
    }

    addListProduct(product) {

      let products = this.state.product;
      let newProduct = products.push(product);
      this.setState({ product: newProduct });
      console.log(this.state.product);
    }

    render() {

      if (!this.props.product) {
          return (<tbody></tbody>);
      }

      return (
        <tbody>
          {this.props.product}
        </tbody>
      );
    }
}

function flatMap(array, fn) {

  let result = [];
  for(let i = 0; i < array.length; i++) {
    let mapping = fn(array[i]);
    result = result.concat(mapping);
  }

  return result;
}

function mapStateToProps(state) {
    return {
        product: state.sendProductToCartReducer
    };
}

export default connect(mapStateToProps)(Cart);
