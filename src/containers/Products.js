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

  handleOnSale = () => {
    this.setState(prevState => ({
      isOnSale: !prevState.isOnSale,
    }));
  };

  render() {
    const { products } = this.props;
    const { isOnSale } = this.state;

    return (
      <React.Fragment>
        <ProductsFilter isOnSale={isOnSale} onClick={this.handleOnSale} />

        <ProductsList
          products={products}
          isOnSale={isOnSale}
          isLoading={false}
        />
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
