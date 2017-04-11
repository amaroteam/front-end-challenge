import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Cart from '../../app/components/Cart.jsx';

var expect = chai.expect;

describe('Cart', () => {    
    let cartRows;
    let cartValue

    beforeEach(() => {
        cartRows = [
            {
                // image, name, quantity, total_item_price
                name: "TEST PRODUCT 1", 
                image: "http://placehold.it/470x594", 
                quantity: 1,
                total_item_price: 100.00
            },
            {
                // image, name, quantity, total_item_price
                name: "TEST PRODUCT 2", 
                image: "http://placehold.it/470x594", 
                quantity: 1,
                total_item_price: 110.00
            },
            {
                // image, name, quantity, total_item_price
                name: "TEST PRODUCT 3", 
                image: "http://placehold.it/470x594", 
                quantity: 1,
                total_item_price: 120.00
            }
        ]        

        cartValue = cartRows.reduce((previousCartItem, currentCartItem) => {
            return ({total_item_price: previousCartItem.total_item_price + currentCartItem.total_item_price});
        })["total_item_price"];
    })    

    it('should render one CartRow for each cart item passed', () => {
        var cart = shallow(<Cart cart={cartRows} cartValue={cartValue} />);
        expect(cart.find('CartRow').length).to.equal(cartRows.length);
    })

    it('should render paragraph with total cart value', () => {
        var cart = shallow(<Cart cart={cartRows} cartValue={cartValue} />);
        expect(cart.find('.cart-total-value').children('div').first().children('p').first().text()).to.contain(cartValue.toFixed(2));
    })    
})