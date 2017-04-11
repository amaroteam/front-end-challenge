import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import utils from '../utils/utils.jsx';

class Product extends Component {
    constructor(props) {
        super(props);
    }   

    render() {
        var {name, image, regular_price, actual_price, sizes} = this.props;

        // Render prices according to the values of the regular_price and actual_price variables
        var renderPrices = () => {
            if (regular_price === actual_price) {
                return (
                    <div className="col-xs-12 col-prices-not-discounted">
                        <span className="regular-price">{regular_price}</span>
                    </div>
                );
            } else {
                return (
                    <div className="col-xs-12 col-prices-discounted">
                        <div className="col-xs-6">
                            <span className="regular-price">{regular_price}</span>
                        </div>
                        <div className="col-xs-6">
                            <span className="actual-price">{actual_price}</span>
                        </div>                        
                    </div>
                );
            }
        }        

        // Render a span for each size of the product with adequate classes
        var renderSizes = () => {
            let sizeSpanClass;
            return sizes.map((size, index) => {
                sizeSpanClass = size.available ? "span-size span-size-available" : "span-size span-size-not-available";
                return <span key={index} className={sizeSpanClass}>{size.size}</span>
            })
        }

        return (
            <div className="product-container">
                <div className="row">
                    <div className="col-xs-12 col-product-image">
                        <img src={image === '' ? 'http://placehold.it/470x594' : image} alt="" className="img img-responsive"/>
                    </div>
                    <div className="col-xs-12 col-product-name">
                        <p>{utils.capitalizeFirstLetterEachWord(name)}</p>
                    </div>                    
                    {renderPrices()}
                    <div className="col-xs-12 col-sizes">
                        <p>{renderSizes()}</p>
                    </div>
                    <div className="col-xs-12 col-add-to-cart">
                        <Button bsStyle="success" block onClick={() => {this.props.onAddToCart(name, image, actual_price)}}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Comprar</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;