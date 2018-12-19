import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import withLoader from '../components/withLoader';
import { removeBasket } from '../actions/store';

import BasketList from '../components/Basket/BasketList';

const propTypes = {
  basket: PropTypes.instanceOf(Array),
  removeBasket: PropTypes.func,
};

const defaultProps = {
  basket: [],
  removeBasket: () => {},
};

class Basket extends PureComponent {
  handleRemoveBasket = event => {
    const { removeBasket } = this.props;
    removeBasket(parseInt(event.target.value, 10));
  };

  render() {
    const { basket } = this.props;

    return (
      <div className="App__basket">
        {basket.length > 0 ? (
          <BasketList basket={basket} onClick={this.handleRemoveBasket} />
        ) : (
          <React.Fragment>
            <div className="App__message">
              Não existem ítens salvos na sacola!
            </div>
          </React.Fragment>
        )}

        <Link
          to="/"
          type="button"
          className="App__button App__button--more-detail"
        >
          {'Voltar'}
        </Link>
      </div>
    );
  }
}

Basket.propTypes = propTypes;
Basket.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    basket: state.store.basket,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeBasket: index => {
      dispatch(removeBasket(index));
    },
  };
};

export default withLoader(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Basket)
  )
);
