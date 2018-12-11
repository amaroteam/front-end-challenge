import React from 'react';

import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductListItem from '../../components/Product/ProductListItem';
import { searchThunk } from '../../store/ducks/thunks';
import slugfy from '../../utils/slugfy';
import './Search.scss';

const Search = ({ itemsFound, searchConnected }) => (
  <div className="search">
    <div className="search__form">
      <input
        className="search__input"
        type="text"
        placeholder="Buscar por produto..."
        onChange={event => searchConnected(event)}
      />
    </div>

    { itemsFound.length > 0
        && (
          <div className="header__title">
            {`${itemsFound.length} items`}
          </div>
        )
      }

    <div className="product__list">
      { itemsFound.length > 0
        ? (itemsFound
          .map(product => (
            <Link key={uuidv1()} to={`/produto/${slugfy(product.name)}`}>
              <ProductListItem
                item={product}
              />
            </Link>
          ))
        ) : (<span className="cart__empty">Nenhum item encontrado :\</span>)
      }
    </div>
  </div>
);

Search.propTypes = {
  itemsFound: PropTypes.arrayOf(PropTypes.shape),
  searchConnected: PropTypes.func,
};

Search.defaultProps = {
  itemsFound: [],
  searchConnected: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  searchConnected: searchThunk,
}, dispatch);

const mapStateToProps = store => ({
  itemsFound: store.search.itemsFound,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
