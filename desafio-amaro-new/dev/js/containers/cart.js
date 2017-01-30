import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Component {

    componentDidMount() {

      let modal = document.getElementById('myModal');
      let btn = document.getElementById("cartButton");
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

      if (!this.props.product) {
          return (<table><tfoot><tr><td>Sem Produtos no Carrinho...</td></tr></tfoot></table>);
      }

      return (
        <table className="modal-table modal-table-horizontal">
          <tbody>
            {this.props.product}
          </tbody>
        </table>
      );
    }
}

function mapStateToProps(state) {
    return {
        product: state.sendProductToCartReducer
    };
}

export default connect(mapStateToProps)(Cart);
