import json from './products.json';

export const fetchProducts = () =>
    new Promise((resolve, reject) => {
        if (json.products.length) {
            return resolve(json.products);
        }

        return reject();
    });

export const addItemToCart = (product, sku) =>
    new Promise(resolve => {
        const savedCart = window.localStorage.cart;
        const cart = savedCart ?  JSON.parse(savedCart) : {};
        const size = product.sizes.filter(size => sku === size.sku)[0];

        const item = cart[sku] ? {
            ...cart[sku],
            quantity: cart[sku].quantity + 1
        } : {
            name: product.name,
            image: product.image,
            price: product.actual_price,
            size: size.size,
            quantity: 1,
        };

        cart[sku] = item;
        window.localStorage.cart = JSON.stringify(cart);

        return resolve(Object.values(cart));
    });

    export const getCart = () => {
        const cart = window.localStorage.cart;
        return cart ?  Object.values(JSON.parse(cart)) : [];
    }