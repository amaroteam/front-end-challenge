import * as React from 'react';
import configureStore from 'redux-mock-store'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../source/app';
import Header from '../source/components/header/header';
import Card from '../source/components/card/card';

configure({
	adapter: new Adapter()
});

describe('<App /> Component', () => {
	const mockStore = configureStore();
	let store;
	let wrapper;

	beforeEach(() => {
		store = mockStore();
		wrapper = shallow(<App store={store} />);
	});

	test('should be rendered', () => {
		expect(wrapper).toBeDefined();
	});

	test('should render <Header /> component', () => {
		expect(wrapper.find(Header)).toBeDefined();
	});

	test('should render <Card /> component', () => {
		expect(wrapper.find(Card)).toBeDefined();
	});

});
