import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectProduct} from '../actions/index'


class ProductList extends Component {

    renderList() {
        return this.props.products[0].products.map((product, id) => {
            return (
                <div key={id} className="product-card">
                  <div className="product-image">
                    <img id='images' role="presentation" src={product.image} value={product.image} />
                  </div>
                  <div className="product-info">
                    <h4 onClick={() => this.props.selectProduct(product)}>{product.name}</h4>
                    <div className="price">
                      <h5>{product.regular_price}</h5>
                      <h6>{product.installments}</h6>
                    </div>
                  </div>
                </div>
            );
        });
    }

    render() {
        return (
          <div>
            <section className="products">
                {this.renderList()}
            </section>
          </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        products: state.products
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectProduct: selectProduct}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(ProductList);
