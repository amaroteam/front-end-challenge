import React, {Component} from 'react';



let listProducts = [];

export const selectProduct = (product) => {
    let products = mountTable(product)
    return {
        type: 'PRODUCT_SELECTED',
        payload: products
    }
};

const mountTable = (product) => {
    let view;
    listProducts.push(product);
    view = listProducts.map( (product, key) => {
        return (
            <tr key={key}>
              <td><img role="presentation" src={product.image} /></td>
              <td><h6>{product.name}</h6></td>
              <td><h6>{product.regular_price}</h6></td>
            </tr>
        )
    });

    return view;
}
