import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withLoader from '../components/withLoader';

import { setProducts } from '../actions/store';

import ProductsFilter from '../components/Products/ProductsFilter';
import ProductsList from '../components/Products/ProductsList';

import productsJSON from '../data/products.json';

const propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  setProducts: PropTypes.func.isRequired,
};

class Products extends PureComponent {
  constructor() {
    super();

    this.state = {
      isOnSale: false,
    };
  }

  componentDidMount() {
    const { products } = this.props;

    if (!products.length) {
      this.fetchAllProducts();
    }
  }

  fetchAllProducts = () => {
    this.addProducts(productsJSON);
  };

  addProducts = data => {
    const { setProducts } = this.props;

    setProducts({
      products: data,
    });
  };

  handleOnSale = event => {
    this.setState({
      isOnSale: event.target.value,
    });
  };

  render() {
    const { products } = this.props;
    const { isOnSale } = this.state;

    return (
      <React.Fragment>
        <ProductsFilter onClick={this.handleOnSale} />

        <ProductsList products={products} isOnSale={isOnSale} />
      </React.Fragment>
    );
  }
}

Products.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    ...state.store,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProducts: data => {
      dispatch(setProducts(data));
    },
  };
};

export default withLoader(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Products)
  )
);
