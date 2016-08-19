import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { shouldComponentUpdate } from 'utils/helpers';

import config from 'config';

import ProductBox from 'components/ProductBox';

export class Products extends React.Component {
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

  render() {
    const props = this.props;
    const items = props.products.items;

    return (
      <div key="Products" className="app__products app__route">
        <div className="app__container">
          <div className="app__grid">
            {
              items.map((d, i) => (
                <ProductBox key={i} cart={props.cart} dispatch={props.dispatch} product={d} />
              ))
            }
          </div>
        </div>
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
