import React, { Component } from 'react';
const uuidV4 = require('uuid/v4');

import api from '../api/api.jsx';
import ProductList from './ProductList.jsx';
import Nav from './Nav.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            cart: []
        }

        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentWillMount() {        
        // Get Products from JSON and save it in the state
        api.getProducts().then((products) => {            
            var parsedProducts = products.map((product) => {
                return {
                    ...product,
                    id: uuidV4()
                };
            });

            this.setState({products: parsedProducts});
        })
    }

    handleAddToCart(name, image, actual_price) {        
        console.log();

        var cartItem = {
            name,
            image,
            actual_price: parseFloat(actual_price.replace("R$ ","").replace(",",".")),
            quantity: 1,
            total_item_price: 1 * parseFloat(parseFloat(actual_price.replace("R$ ","").replace(",",".")))
        };

        this.setState({
            cart: [
                ...this.state.cart,
                cartItem
            ]
        });
    }

    render() {
        var {products} = this.state;

        return (
            <div className="container">
                <Nav/>
                <ProductList products={products} onAddToCart={this.handleAddToCart} />
            </div>
        );
    }
}

export default MainApp;