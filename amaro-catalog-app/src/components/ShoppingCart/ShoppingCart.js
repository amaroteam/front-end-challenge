import React, { Component } from 'react';
import { connect } from "react-redux";
import ShoppingCartActions from "../../store/actions/ShoppingCartActions";
import NavigationBar from '../NavigationBar/NavigationBar';
import './ShoppingCart.css'



class ShoppingCart extends Component {
  

  _removeItemFromCart(i) {
    this.props.dispatch(ShoppingCartActions.removeItemFromShoppingCart(i));
  }

  render() {
    return (
      <>
        <NavigationBar />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Meu Carrinho Amaro </h1>
          </div>
        </section>

        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive-sm">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Imagem</th>
                      <th scope="col">Produto</th>
                      <th scope="col">Tamanho</th>
                      <th scope="col" className="text-center">
                        Quantidade
                      </th>
                      <th scope="col" className="text-right">
                        Preço
                      </th>
                      <th scope="col" className="text-right">
                        Total
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.shoppingCartList.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <img
                              width={80}
                              alt={item.product.name}
                              src={item.product.image}
                            />
                          </td>
                          <td>{item.product.name}</td>
                          <td>{item.product.sizes[item.product_size].size}</td>
                          <td>{item.quantity}</td>
                          <td className="text-right">
                            {item.product.actual_price}
                          </td>
                          <td className="text-right">
                            {item.product.actual_price}
                          </td>
                          <td className="text-right">
                            <button
                              onClick={() => this._removeItemFromCart(i)}
                              className="btn btn-sm btn-danger"
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <button className="btn btn-outline-secondary">
                    Continuar Comprando
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <button className="btn  btn-outline-success">
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect(store => ({ shoppingCartList: store.shoppingCartItens }))(ShoppingCart);
