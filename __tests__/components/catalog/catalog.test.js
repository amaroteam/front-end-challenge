import * as React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Catalog from '../../../source/components/catalog/catalog';
import CatalogItem from '../../../source/components/catalog/catalogItem';

const mock = [
	{
		name: "BOLSA FLAP TRIANGLE",
		style: "20002945",
		code_color: "20002945_027",
		color_slug: "caramelo",
		color: "CARAMELO",
		on_sale: true,
		regular_price: "R$ 199,90",
		actual_price: "R$ 159,90",
		discount_percentage: "25%",
		installments: "3x R$ 53,30",
		image: "https://d3l7rqep7l31az.cloudfront.net/images/products/20002945_027_catalog_1.jpg?1459540966",
		sizes: [
			{
				available: true,
				size: "U",
				sku: "6559_1000054_0_U"
			}
		]
	},
	{
		name: "BOLSA FLAP TRIANGLE",
		style: "20002945",
		code_color: "20002945_027",
		color_slug: "caramelo",
		color: "CARAMELO",
		on_sale: false,
		regular_price: "R$ 199,90",
		actual_price: "R$ 159,90",
		discount_percentage: "25%",
		installments: "3x R$ 53,30",
		image: "https://d3l7rqep7l31az.cloudfront.net/images/products/20002945_027_catalog_1.jpg?1459540966",
		sizes: [
			{
				available: true,
				size: "U",
				sku: "6559_1000054_0_U"
			}
		]
	}
];

configure({
	adapter: new Adapter()
});

describe('<Catalog /> Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Catalog products={mock} />);
	});

	test('should be rendered', () => {
		expect(wrapper).toBeDefined();
	});

	test('should render <CatalogItem /> component', () => {
		expect(wrapper.find(CatalogItem).length).toBeGreaterThan(0);
	});

	test('should filter products in an list', () => {
		wrapper.find('.filter a').simulate('click', {preventDefault:() => {}});
		expect(wrapper.instance().state.hasFilter).toBe(true);
		expect(wrapper.instance().state.products).toEqual([mock[0]]);

		wrapper.find('.filter a').simulate('click', {preventDefault:() => {}});
		expect(wrapper.instance().state.hasFilter).toBe(false);
		expect(wrapper.instance().state.products).toEqual(mock);
	});
});
