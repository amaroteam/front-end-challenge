import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { shouldComponentUpdate } from 'utils/helpers';

import Modal from 'components/Modal';
import ProductBox from 'components/ProductBox';
import ProductItem from 'components/ProductItem';

export class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: undefined,
      showModal: false
    };
  }

  static propTypes = {
    location: React.PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  @autobind
  onClickSale(e) {
    e.preventDefault();
    const el = e.currentTarget;

    console.log(el);
  }

  @autobind
  onClickProduct(e) {
    e.preventDefault();
    const el = e.currentTarget;

    this.setState({
      productId: parseInt(el.dataset.id, 10),
      showModal: true
    });
  }

  @autobind
  onHideModal() {
    this.setState({
      productId: undefined,
      showModal: false
    });
  }

  render() {
    const state = this.state;
    const props = this.props;
    const items = props.products.items;
    const output = {};

    if (state.productId) {
      output.product = (
        <ProductItem
          cart={props.cart}
          dispatch={props.dispatch}
          onHideModal={this.onHideModal}
          product={items.find(d => d.id === state.productId)} />);
    }

    return (
      <div key="Products" className="app__products app__route">
        <div className="app__container">
          <div className="app__products__menu">
            <a href="#sale" onClick={this.onClickSale}>
              SALE
            </a>
          </div>
          <div className="app__grid">
            {
              items.map((d, i) => (
                <ProductBox
                  key={i}
                  cart={props.cart}
                  dispatch={props.dispatch}
                  product={d}
                  onClickProduct={this.onClickProduct} />
              ))
            }
          </div>
        </div>
        <Modal
          animation={true}
          className="app__products__modal"
          onHide={this.onHideModal}
          show={state.showModal}>
          {output.product}
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  };
}

export default connect(mapStateToProps)(Products);
