import React from 'react';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Product from '../../components/Product';
import './Products.scss';

const Products = ({ products, loading }) => (
  <section className="products">
    <div className="app__container">
      <div className="products__grid">
        { !loading
          && products.map(product => (
            <Product
              key={uuidv1()}
              className="products__box"
              {...product}
            />
          ))
        }
      </div>
    </div>
  </section>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
  loading: PropTypes.bool,
};

Products.defaultProps = {
  products: [],
  loading: true,
};

const mapStateToProps = store => ({
  products: store.catalog.products,
  loading: store.catalog.loading,
});

export default connect(mapStateToProps)(Products);
