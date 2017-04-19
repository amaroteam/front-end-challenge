import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CartRow from '../../app/components/CartRow.jsx';
import utils from '../../app/utils/utils.jsx';

var expect = chai.expect;

describe('CartRow', () => {
    let cartRowData;
    let cartRow;

    beforeEach(() => {
        cartRowData = {
            id: 1,
            name: "TEST PRODUCT 1", 
            image: "http://placehold.it/470x594", 
            quantity: 1, 
            total_item_price: 100.00,             
        }

        cartRow = shallow(<CartRow key={1} {...cartRowData} />);
    })

    it('should render an image with src of the passed image propery', () => {
        expect(cartRow.find('img').length).to.equal(1);
        var cartRowImg = cartRow.find('img').first();

        expect(cartRowImg.prop('src')).to.equal(cartRowData.image);
    })

    it('should render a paragraph with the name of the product', () => {
        expect(cartRow.find('.cart-row-product-name').first().text()).to.equal(utils.capitalizeFirstLetterEachWord(cartRowData.name));
    })

    it('should render a paragraph with the total cart row value', () => {
        expect(cartRow.find('.cart-row-total-value').first().text()).to.contain(cartRowData.total_item_price.toFixed(2));
    })

    it('should render an input with the initial value equal to the passed quantity', () => {
        expect(cartRow.find('input').length).to.equal(1);
        var cartRowQuantityInput = cartRow.find('input').first();

        expect(cartRowQuantityInput.prop('value')).to.equal(cartRowData.quantity);
    })

    it('should update the quantity on the state when the input value changes', () => {
        expect(cartRow.state('quantity')).to.equal(cartRowData.quantity);
        var formInput = cartRow.find('input');
        var newQuantity = 4;
        formInput.first().simulate('change', {target: {value: newQuantity}})
        expect(cartRow.state('quantity')).to.equal(newQuantity);
    })

    it('should call onChangeCartItemQuantity with the new quantity and cart row id on update button click', () => {
        const spy = sinon.spy();
        cartRow = shallow(<CartRow key={1} {...cartRowData} onChangeCartItemQuantity={spy} />);

        var formInput = cartRow.find('input');
        var newQuantity = 4;
        formInput.first().simulate('change', {target: {value: newQuantity}})

        cartRow.find('#btn-update-quantity').first().simulate('click');

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(cartRowData.id, newQuantity)).to.be.true;
    })

    it('should call onRemoveCartItem with cart row id when remove from cart button is clicked', () => {
        const spy = sinon.spy();
        cartRow = shallow(<CartRow key={1} {...cartRowData} onRemoveCartItem={spy} />);

        cartRow.find('#btn-remove-cart-row').first().simulate('click');

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(cartRowData.id)).to.be.true;
    })
})