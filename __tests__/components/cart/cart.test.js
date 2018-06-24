import * as React from 'react';
import configureStore from 'redux-mock-store'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cart from '../../../source/components/cart/cart';

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
		image: "https://d3l7rqep7l31az.cloudfront.net/images/products/20002945_027_cart_1.jpg?1459540966",
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
		image: "https://d3l7rqep7l31az.cloudfront.net/images/products/20002945_027_cart_1.jpg?1459540966",
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

describe('<Cart /> Component', () => {
	const mockStore = configureStore();
	const store = mockStore({cart: []});
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Cart store={store} />);
	});

	test('should be rendered', () => {
		expect(wrapper.length).toBe(1);
	});
});
