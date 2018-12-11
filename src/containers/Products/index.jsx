import React from 'react';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearProductThunk } from '../../store/ducks/thunks';

import Product from '../../components/Product';
import './Products.scss';

const Products = ({
  products,
  loading,
  clearProductConnected,
}) => (
  <section className="products">
    <div className="app__container" onLoad={clearProductConnected}>
      { products.length > 0
        && (
          <div className="header__title">
            {`${products.length} items`}
          </div>
        )
      }

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
  clearProductConnected: PropTypes.func,
};

Products.defaultProps = {
  products: [],
  loading: true,
  clearProductConnected: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  clearProductConnected: clearProductThunk,
}, dispatch);

const mapStateToProps = store => ({
  products: store.catalog.products,
  loading: store.catalog.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
