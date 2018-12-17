import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setBasket } from '../../actions/products';

import ProductsTitle from './ProductsTitle';
import ProductsImage from './ProductsImage';
import ProductsPrices from './ProductsPrices';
import ProductsSizes from './ProductsSizes';

const propTypes = {
  products: PropTypes.instanceOf(Array),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  setBasket: PropTypes.func,
};

const defaultProps = {
  products: [],
  history: {
    location: {
      name: '',
    },
  },
  setBasket: () => {},
};

class ProductsDetails extends PureComponent {
  constructor() {
    super();

    this.state = {
      productName: '',
      productSize: '',
      productAmount: 1,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getProduct = (style, code_color) => {
    const { products } = this.props;

    return (
      products.find(
        product => product.style === style && product.code_color === code_color
      ) || {}
    );
  };

  handleBasketAmount = event => {
    this.setState({ productAmount: event.target.value });
  };

  handleAdd = () => {
    const { productName, productSize, productAmount } = this.state;
    const { setBasket } = this.props;

    setBasket(productName, productSize, productAmount);
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { products } = this.props;
    const { history } = this.props;

    if (!products.length) {
      history.goBack();
    }

    const {
      history: {
        location: {
          state: { style, code_color },
        },
      },
    } = this.props;

    const {
      name,
      actual_price,
      color,
      discount_percentage,
      image,
      installments,
      on_sale,
      regular_price,
      sizes,
    } = this.getProduct(style, code_color);

    return (
      <div className="App__products__item App__products__item--large">
        <ProductsTitle name={name} color={color} isTitle />

        <div className="App__products__main">
          <ProductsImage name={name} color={color} image={image} isLarge />

          <div className="App__products__info">
            <ProductsPrices
              on_sale={on_sale}
              regular_price={regular_price}
              actual_price={actual_price}
              discount_percentage={discount_percentage}
            />

            <p className="App__products__details">{installments}</p>

            <ProductsSizes sizes={sizes} />

            <input
              type="number"
              id="productAmount"
              defaultValue="1"
              className="App__input App__input--amount"
              onChange={this.handleBasketAmount}
            />
            <button
              type="button"
              className="App__button App__button--more-detail"
              onClick={() => this.handleAdd(name, 1, 2)}
            >
              {'Adicionar'}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="App__button App__button--more-detail"
          onClick={this.handleGoBack}
        >
          {'Voltar'}
        </button>
      </div>
    );
  }
}

ProductsDetails.propTypes = propTypes;
ProductsDetails.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    ...state.store,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBasket: (name, size, qtd) => {
      dispatch(setBasket(name, size, qtd));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsDetails)
);
