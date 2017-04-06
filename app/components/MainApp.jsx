import React, { Component } from 'react';

import api from '../api/api.jsx';

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
            this.setState({products});
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Amaro Best-Sellers</h1>
            </div>
        );
    }
}

export default MainApp;