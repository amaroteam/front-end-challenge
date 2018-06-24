import * as React from 'react';
import configureStore from 'redux-mock-store'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../source/app';
import Header from '../source/components/header/header';
import Catalog from '../source/components/catalog/catalog';

configure({
	adapter: new Adapter()
});

describe('<App /> Component', () => {
	const mockStore = configureStore();
	let store;
	let wrapper;

	beforeEach(() => {
		store = mockStore({cart: []});
		wrapper = shallow(<App store={store} />);
	});

	test('should be rendered', () => {
		expect(wrapper.length).toBe(1);
	});

	test('should render <Header /> component', () => {
		wrapper = mount(<Header store={store} />);
		expect(wrapper.find(Header)).toBeDefined();
	});

	test('should render <Catalog /> component', () => {
		wrapper = mount(<Catalog store={store} products={[]} />);
		expect(wrapper.find(Catalog)).toBeDefined();
	});

});
