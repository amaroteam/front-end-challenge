import * as React from 'react';
import configureStore from 'redux-mock-store'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../../source/components/header/header';

configure({
	adapter: new Adapter()
});

describe('<Header /> Component', () => {
	const mockStore = configureStore();
	let store;
	let wrapper;

	beforeEach(() => {
		store = mockStore({cart: []});
		wrapper = mount(<Header store={store} />);
	});

	test('should be rendered', () => {
		expect(wrapper.length).toBe(1);
	});
});
