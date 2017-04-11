import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';

import Product from '../../app/components/Product.jsx';
import utils from '../../app/utils/utils.jsx';

var expect = chai.expect;

describe('Product', () => {
    let productData;
    let product;

    beforeEach(() => {
        productData = {            
            name: "TEST PRODUCT 1", 
            image: "http://placehold.it/470x594", 
            regular_price: "R$ 130,00", 
            actual_price: "R$ 100,00", 
            sizes: [
                {
                    available: false,
                    size: "PP",
                    sku: "5807_343_0_PP"
                },
                {
                    available: true,
                    size: "P",
                    sku: "5807_343_0_P"
                }
            ]
        }
        product = shallow(<Product key={1} {...productData} />);
    })

    it('should render an image with the src of the image attribute passed', () => {
        expect(product.find('img').length).to.equal(1);
        var productImg = product.find('img').first();

        expect(productImg.prop('src')).to.equal(productData.image);
    })

    it('should render a paragraph in the col-product-name div with the name of the product with the first letter of each word capitalized', () => {
        expect(product.find('.col-product-name').length).to.equal(1);
        var productName = product.find('.col-product-name').children('p').first();        

        expect(productName.text()).to.equal(utils.capitalizeFirstLetterEachWord(productData.name));
    })

    it('should render a span in the col-sizes div for each size passed', () => {
        expect(product.find('.col-sizes').children('p').first().children('span').length).to.equal(productData.sizes.length);
    })
})