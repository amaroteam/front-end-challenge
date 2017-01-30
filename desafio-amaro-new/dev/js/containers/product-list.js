import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionProduct} from '../actions/index'


class ProductList extends Component {

  constructor(props) {

    super(props);
    this.state = {
      list: this.props.products[0],
      secondaryList: [],
      newList: []
    }
    this.isSale = this.isSale.bind(this);
    this.hasImage = this.hasImage.bind(this);
  }

  componentDidMount() {

    this.state.list.products.map( list => {
      this.state.secondaryList.push(list);
      this.setState({newList: this.state.secondaryList})
    });
  }

  isSale(percentage) {

   percentage = percentage ? <span className="sale">{percentage}</span> : '';
   return percentage;
  }

  hasImage(image) {

    image = image ? image : "http://www.fodensband.co.uk/assets/Uploads/_resampled/croppedimage200280-no-image.jpg?";
    return image;
  }

    renderList() {
        return this.state.newList.map((product, key) => {
            return (
              <div key={key} className="pure-u-1-3 pure-u-md-1-3 pure-u-lg-1-3">
                <div className="product-card">
                  <div className="product-image">
                    {this.isSale(product.discount_percentage)}
                    <img id='images' role="presentation" src={this.hasImage(product.image)} />
                  </div>
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <div className="price">
                      <h5>
                      {(product.discount_percentage) ? product.actual_price : product.regular_price}
                      , ou {product.installments}
                      </h5>
                    </div>
                    <div onClick={() => this.props.actionProduct(product)} className="cart-button">Carrinho</div>
                  </div>
                </div>
              </div>
            );
        });
    }

    render() {
        return (
          <div>
            <section className="products pure-g">
              {this.renderList()}
            </section>
          </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({actionProduct: actionProduct}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList);
