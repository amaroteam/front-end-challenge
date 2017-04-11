import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Nav from '../../app/components/Nav.jsx';

var expect = chai.expect;

describe('Nav', () => {
    it('should call onToggleCart when cart icon is clicked', () => {
        const spy = sinon.spy();
        var nav = shallow(<Nav onToggleCart={spy} />);
        nav.find('.fa-shopping-cart').first().simulate('click');

        expect(spy.calledOnce).to.be.true;
    })
})