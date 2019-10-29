import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts } from '../../api/redux/reducers/list/actions';

import Spinner from '../Spinner';
import ProductList from './ProductList';

import './style.scss';

class List extends Component {
  static propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    this.setState({ isLoading: true });
    this.props.getProducts(() => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    return (
      <Fragment>
        {isLoading && <Spinner />}
        <div className="product-container">
          <ProductList products={products}/>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.list.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(List);
