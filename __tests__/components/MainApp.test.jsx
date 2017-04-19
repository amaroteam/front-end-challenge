import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import MainApp from '../../app/components/MainApp.jsx';

var expect = chai.expect;

describe('MainApp', () => {
    it('should render a Nav', () => {
        var app = shallow(<MainApp/>);

        expect(app.find('Nav').length).to.equal(1);
    })

    it('should initially render a ProductList, and should not render a Cart', () => {
        var app = shallow(<MainApp/>);

        expect(app.find('ProductList').length).to.equal(1);
        expect(app.find('Cart').length).to.equal(0);
    })

    it('should render Cart component if cartVisible state is true and not render a ProductList', () => {
        var app = shallow(<MainApp/>);
        app.setState({cartVisible: true});

        expect(app.find('Cart').length).to.equal(1);
        expect(app.find('ProductList').length).to.equal(0);
    })
})