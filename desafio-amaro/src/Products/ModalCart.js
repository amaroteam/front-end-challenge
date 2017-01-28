import React, { Component } from 'react';

export default class ModalCart extends Component {

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

  render() {
    return(

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
            <tbody>
              <tr>
                <td><img role="presentation" src={this.props.image} /></td>
                <td><h6>{this.props.name}</h6></td>
                <td><h6>{this.props.price}</h6></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }
}
