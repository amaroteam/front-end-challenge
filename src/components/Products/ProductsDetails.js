import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setBasket } from '../../actions/store';

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
      isSizeSelected: false,
      productName: '',
      productImage: '',
      productColor: '',
      productSize: '',
      productQtd: 1,
      productPrice: 0,
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

  handleSize = event => {
    this.setState({ isSizeSelected: true, productSize: event.target.value });
  };

  handleBasketQtd = event => {
    this.setState({ productQtd: event.target.value });
  };

  handleAdd = () => {
    const {
      isSizeSelected,
      productName,
      productImage,
      productColor,
      productSize,
      productQtd,
      productPrice,
    } = this.state;

    const { history, setBasket } = this.props;

    if (isSizeSelected) {
      setBasket(
        productName,
        productImage,
        productColor,
        productSize,
        productQtd,
        productPrice
      );

      history.push('/sacola');
    } else {
      this.setState({ isSizeSelected: true });
    }
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

    this.setState({
      productName: name,
      productImage: image,
      productColor: color,
      productPrice: regular_price,
    });

    const { isSizeSelected, productSize } = this.state;

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

            <ProductsSizes
              sizes={sizes}
              sizeSelected={productSize}
              onClick={this.handleSize}
            />

            {isSizeSelected && !productSize.length && (
              <p className="App__message--error">Selecione o tamanho...</p>
            )}

            <input
              type="number"
              defaultValue="1"
              className="App__input App__input--qtd"
              onChange={this.handleBasketQtd}
            />
            <button
              type="button"
              className="App__button App__button--more-detail"
              onClick={this.handleAdd}
            >
              {'Adicionar'}
            </button>
          </div>
        </div>

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

ProductsDetails.propTypes = propTypes;
ProductsDetails.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    ...state.store,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBasket: (name, image, color, size, qtd, price) => {
      dispatch(setBasket(name, image, color, size, qtd, price));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsDetails)
);
