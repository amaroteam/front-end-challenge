import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';

import slugify from 'react-slugify';
import AmaroApi from '../../services/api';
import './Catalog.css';

export const ProductBox = ({ product }) => {
  const [isHovered, setisHovered] = useState(0);
    const hoverImageClass = isHovered
      ? "card-img-top animated bounce"
      : "card-img-top";
    return (
      <div className="col-md-4 mb-3">
        <Link
          
          to={{
            pathname: `/produto/${slugify(product.name)}`,
            query: { product: product }
          }}
        >
          <div className="card border-0 rounded-0" >
            <img onMouseEnter={() => setisHovered(isHovered + 1)}className={hoverImageClass}
              src={product.image || "https://place-hold.it/470x594/ffffff?text=Imagem Indisponível"}
              alt={product.name}
            />

            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.actual_price}</p>
            </div>
          </div>
        </Link>
      </div>
    );

}



export default class Catalog extends Component {


    state = { amaroProducts:[] }

    componentDidMount = async () => {
         const amaroProducts = await AmaroApi.getAmaroProducts();
         this.setState({
             amaroProducts: amaroProducts.products
         })
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    {
                        this.state.amaroProducts.map( (product, i) => 
                            <ProductBox key={i}  product={product} />
                        )}
                    </div>
                </div>

                    );
                }
            }
