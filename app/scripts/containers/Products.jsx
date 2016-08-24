import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import classNames from 'classnames';
import { shouldComponentUpdate } from 'utils/helpers';

import Modal from 'components/Modal';
import ProductBox from 'components/ProductBox';
import Product from 'components/Product';

export class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: false,
      productId: undefined,
      showModal: false
    };
  }

  static propTypes = {
    cart: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    products: React.PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  @autobind
  onClickSale(e) {
    e.preventDefault();

    this.setState({
      filter: !this.state.filter
    });
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
  onHideModal(cb) {
    this.setState({
      productId: undefined,
      showModal: false
    }, () => {
      if (typeof cb === 'function') {
        setTimeout(() => {
          cb();
        }, 500);
      }
    });
  }

  render() {
    const state = this.state;
    const props = this.props;
    const output = {};
    let items = props.products.items;

    if (state.productId) {
      output.product = (
        <Product
          dispatch={props.dispatch}
          onHideModal={this.onHideModal}
          product={items.find(d => d.id === state.productId)} />);
    }

    if (state.filter) {
      items = props.products.items.filter(d => d.on_sale === true);
    }

    return (
      <div key="Products" className="app__products app__route">
        <div className="app__container">
          <div className="app__products__menu">
            <h6>FILTRO:</h6>
            <a
              href="#sale"
              className={classNames({
                active: state.filter
              })}
              onClick={this.onClickSale}>
              SALE
            </a>
          </div>
          <div className="app__grid">
            {
              items.map((d, i) => (
                <ProductBox
                  key={i}
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
