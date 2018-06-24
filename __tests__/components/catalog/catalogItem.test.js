import * as React from 'react';
import configureStore from 'redux-mock-store'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatalogItem from '../../../source/components/catalog/catalogItem';

const mock = {
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
};

configure({
	adapter: new Adapter()
});

describe('<CatalogItem /> Component', () => {
	const mockStore = configureStore();
	const store = mockStore();
	let wrapper;

	test('should select one available size', () => {
		wrapper = mount(shallow(<CatalogItem store={store} product={mock} />).get(0));
		wrapper.find('.size').at(0).simulate('click');

		expect(wrapper.find('.size').at(0).hasClass('selected')).toBe(true);
		expect(wrapper.instance().state.itemSize).toEqual('U');
	});
});
