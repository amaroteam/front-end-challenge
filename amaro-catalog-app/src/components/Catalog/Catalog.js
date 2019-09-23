import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import AmaroApi from '../../services/api';
import './Catalog.css';

export const ProductBox = ({ product }) => {
  const [isHovered, setisHovered] = useState(0);
  const hoverImageClass = isHovered
    ? 'card-img-top animated bounce'
    : 'card-img-top';
  return (
    <div className="col-md-4 mb-3">
      <Link
        to={{
          pathname: `/produto/${slugify(product.name)}`,
          query: { product: product },
        }}
      >
        <div className="card border-0 rounded-0">
          <img
            onMouseEnter={() => setisHovered(isHovered + 1)}
            className={hoverImageClass}
            src={
              product.image ||
              'https://place-hold.it/470x594/ffffff?text=Imagem Indisponível'
            }
            alt={product.name}
          />
          <div className="card-body text-dark text-center">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.actual_price}</p>
            <button className="btn btn-block btn-dark">Comprar</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { amaroProducts: [], textoBusca: '' };
  }

  componentDidMount = async () => {
    const amaroProducts = await AmaroApi.getAmaroProducts();
    this.setState({
      amaroProducts: amaroProducts.products,
    });
  };

  searchProduct = async event => {
    this.setState({
      textoBusca: event.target.value,
    });

    let _products = this.state.amaroProducts;
    let _filteredProducts = [];
    let _newProducts = [];
    _filteredProducts = _products.filter(product =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    if (_filteredProducts.length === 0 || !event.target.value) {
      _newProducts = await AmaroApi.getAmaroProducts();
      this.setState({
        amaroProducts: _newProducts.products,
      });
    } else {
      this.setState({
        amaroProducts: _filteredProducts,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="col m-0 p-0">
          <input
            onChange={e => this.searchProduct(e)}
            value={this.state.textoBusca}
            className="form-control form-control-lg form-control-borderless mb-3"
            type="search"
            placeholder="Busca ..."
          ></input>
        </div>

        <div className="row">
          {this.state.amaroProducts.length > 0 ? (
            this.state.amaroProducts.map((product, i) => (
              <ProductBox key={i} product={product} />
            ))
          ) : (
            <h2>Aguarde ...</h2>
          )}
        </div>
      </div>
    );
  }
}
