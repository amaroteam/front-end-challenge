import React from 'react';
import renderer from 'react-test-renderer';

import Product from '../../src/components/Product.jsx';

describe('Product', () => {
	let _Product;
	beforeEach(() => {
		_Product = new Product({});
	});

	test('renderName', () => {
		const name = renderer.create(_Product.renderName({name: 'teste'})).toJSON();
		expect(name).toMatchSnapshot();
	});

	test('getAvailableSizes', () => {
		const sizes = _Product.getAvailableSizes([
		{
			"available": false,
			"size": "PP",
		}, {
			"available": true,
			"size": "P",
		}, {
			"available": true,
			"size": "M",
		}, {
			"available": true,
			"size": "G",
		}, {
			"available": false,
			"size": "GG",
		}
		]);
		expect(sizes).toEqual('P,M,G');
	});

	test('renderSizes null', () => {
		const sizes = _Product.renderSizes({});
		const sizes2 = _Product.renderSizes({sizes: []});

		expect(sizes).toBe(null);
		expect(sizes2).toBe(null);
	});

	test('renderSizes', () => {
		const sizes = renderer.create(_Product.renderSizes({sizes: [
		{
			"available": false,
			"size": "PP",
		}, {
			"available": true,
			"size": "P",
		}, {
			"available": true,
			"size": "M",
		}, {
			"available": true,
			"size": "G",
		}, {
			"available": false,
			"size": "GG",
		}
		]})).toJSON();

		expect(sizes).toMatchSnapshot();
	});

	test('renderImage', () => {
		const image = renderer.create(_Product.renderImage({image: 'url', name: 'nm'})).toJSON();

		expect(image).toMatchSnapshot();
	});

	test('renderCartButton', () => {
		const button = renderer.create(_Product.renderCartButton()).toJSON();

		expect(button).toMatchSnapshot();
	});

	test('toCart', () => {
		let cart = null;
		const _Product = new Product({toCart: item => {
			cart = item;
		}});

		expect(cart).toBeNull();
		_Product.toCart();
		expect(cart).toBeTruthy();
	});

	test('render', () => {
		const _Product = renderer.create(<Product toCart={() => {}} image="url" name="nome" actual_price="R$ 10,00" regular_price="R$ 20,00" discount_percentage="50%" installments="2x R$ 5,00" sizes={[{"available": false, "size": "PP", }, {"available": true, "size": "P", }, {"available": true, "size": "M", }, {"available": true, "size": "G", }, {"available": false, "size": "GG", } ]} />).toJSON();
		expect(_Product).toMatchSnapshot();
	});
});