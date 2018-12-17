import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setProducts, setBasket } from '../actions/products';

import ProductsList from '../components/Products/ProductsList';

import productsJSON from '../data/products.json';

const propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  setProducts: PropTypes.func.isRequired,
};

class ProductsContainer extends PureComponent {
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
      loading: false,
    });
  };

  render() {
    const { loading, products } = this.props;
    if (loading) return <p className="App__loading">Loading...</p>;

    return <ProductsList products={products} />;
  }
}

ProductsContainer.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    ...state.store,
    ...state.basket,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProducts: data => {
      dispatch(setProducts(data));
    },
    setBasket: data => {
      dispatch(setBasket(data));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsContainer)
);
