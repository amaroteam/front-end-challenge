import React, { Component } from 'react';

class Product extends Component {
    render() {
        var {name, image, regular_price, actual_price, discount_percentage, sizes} = this.props;

        // Capitalize first letter of each word on product name
        var renderName = () => {
            return (name
                .toLowerCase()
                .split(' ')
                .map(function(word) {
                    return word[0].toUpperCase() + word.substr(1);
                })
                .join(' '))        
        }

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
                        <div className="col-xs-12 col-discount-percentage">
                            <span className="discount-percentage">- {discount_percentage}</span>
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
                        <p>{renderName()}</p>
                    </div>                    
                    {renderPrices()}
                    <div className="col-xs-12">
                        <p>{renderSizes()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;