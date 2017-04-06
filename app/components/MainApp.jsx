import React, { Component } from 'react';
const uuidV4 = require('uuid/v4');

import api from '../api/api.jsx';
import ProductList from './ProductList.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
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

    render() {
        var {products} = this.state;

        return (
            <div className="container">
                <h1>Amaro Best-Sellers</h1>
                <ProductList products={products} />
            </div>
        );
    }
}

export default MainApp;