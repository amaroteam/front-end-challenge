import React, { Component } from 'react';
const uuidV4 = require('uuid/v4');

import api from '../api/api.jsx';

import Cart from './Cart.jsx';
import Nav from './Nav.jsx';
import ProductList from './ProductList.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            cart: [],
            cartVisible: false,
            showOnlyOnSale: false
        }

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleToggleCart = this.handleToggleCart.bind(this);
        this.handleChangeCartItemQuantity = this.handleChangeCartItemQuantity.bind(this);
        this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
        this.handleToggleShowOnSale = this.handleToggleShowOnSale.bind(this);
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
        var alreadyAdded = false;

        if (this.state.cart.length > 0) {
            this.state.cart.forEach((cartItem) => {
                if (cartItem.name === name) {
                    alreadyAdded = true;
                }
            })
        }

        if (alreadyAdded === false) {
            var cartItem = {
                id: uuidV4(),
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
        
    }

    handleToggleCart() {
        this.setState({
            cartVisible: !this.state.cartVisible
        });
    }

    handleChangeCartItemQuantity(cartItemId, quantity) {
        var updatedCartItems = this.state.cart.map((cartItem) => {
            if (cartItem.id === cartItemId) {
                cartItem.quantity = quantity;
                cartItem.total_item_price = quantity * cartItem.actual_price;          
            }

            return cartItem;
        });

        this.setState({cart: updatedCartItems});
    }

    handleRemoveCartItem(cartItemId) {
        var updatedCartItems = this.state.cart.filter((cartItem) => {
            return cartItem.id !== cartItemId
        })

        console.log(updatedCartItems);
        this.setState({cart: updatedCartItems});
    }

    handleToggleShowOnSale() {
        this.setState({showOnlyOnSale: !this.state.showOnlyOnSale});
    }

    render() {
        var {products, cartVisible, cart, showOnlyOnSale} = this.state;

        if (showOnlyOnSale) {
            var filteredProducts = products.filter((product) => {
                return product.on_sale === true
            })
        } else {
            var filteredProducts = products;
        }

        if (cart.length === 0) {
            var cartValue = 0;
        } else if (cart.length === 1) {
            var cartValue = cart[0].total_item_price;
        } else {
            var cartValue = cart.reduce((previousCartItem, currentCartItem) => {
                return ({total_item_price: previousCartItem.total_item_price + currentCartItem.total_item_price});
            })["total_item_price"]
        }        

        var renderCartOrProducts = () => {
            if (cartVisible) {
                return (<Cart onToggleCart={this.handleToggleCart} cart={cart} cartValue={cartValue} onChangeCartItemQuantity={this.handleChangeCartItemQuantity} onRemoveCartItem={this.handleRemoveCartItem} />);
            } else {
                return (<ProductList products={filteredProducts} onAddToCart={this.handleAddToCart} />);
            }
        }        

        return (
            <div className="container">
                <Nav onToggleCart={this.handleToggleCart} />
                <p className="toggle-show-on-sale text-center" onClick={this.handleToggleShowOnSale} ><a>{showOnlyOnSale ? "Mostrar todos os produtos" : "Mostrar apenas produtos em promoção"}</a></p>
                {renderCartOrProducts()}
            </div>
        );
    }
}

export default MainApp;