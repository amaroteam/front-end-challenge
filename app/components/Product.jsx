import React, { Component } from 'react';

class Product extends Component {
    render() {
        var {name, image, regular_price, actual_price, on_sale, sizes} = this.props;

        var renderSizes = () => {
            return sizes.map((size, index) => {
                console.log(size.available);
                return <span key={index}>{size.size} - {size.available ? "true" : "false"}</span>
            })
        }

        return (
            <div className="product-container">
                <div className="row">
                    <div className="col-xs-12">
                        <img src={image === '' ? 'http://placehold.it/470x594' : image} alt="" className="img img-responsive"/>
                    </div>
                    <div className="col-xs-12">
                        <p>{name}</p>
                    </div>
                    <div className="col-xs-12">
                        <p>{regular_price} - {actual_price}</p>
                    </div>
                    <div className="col-xs-12">
                        <p>{on_sale}</p>
                    </div>
                    <div className="col-xs-12">
                        <p>{renderSizes()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;