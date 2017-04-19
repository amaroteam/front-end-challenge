import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import ProductList from '../../app/components/ProductList.jsx';

var expect = chai.expect;

describe('ProductList', () => {
    it('should render one Product component for each product passed to it', () => {
        var products = [
            {   
                // name, image, regular_price, actual_price, discount_percentage, sizes
                name: "Product 1", 
                image: "http://placehold.it/470x594", 
                regular_price: "R$ 100,00", 
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
            },
            {   
                name: "Product 2", 
                image: "http://placehold.it/470x594", 
                regular_price: "R$ 80,00", 
                actual_price: "R$ 100,00", 
                sizes: [
                    {
                        available: false,
                        size: "PP",
                        sku: "5807_344_0_PP"
                    },
                    {
                        available: true,
                        size: "P",
                        sku: "5807_344_0_P"
                    }
                ]
            }
        ]

        var productList = shallow(<ProductList products={products} />)
        expect(productList.find('Product').length).to.equal(2);
    })
})