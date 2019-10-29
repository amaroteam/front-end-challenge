import React from 'react';
import CustomProvider from '../../src/provider/index';
import App from '../App';
import Enzyme,{ mount } from 'enzyme';
import Cart from '../../src/components/Cart';
import List from '../../src/components/List';
import Spinner from '../../src/components/Spinner';
import adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new adapter() });

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <CustomProvider>
      <App />
    </CustomProvider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('render should be showing a list of products', () => {
  expect(wrapped.find(List).length).toEqual(1);
});

it('render should be showing cart', () => {
  expect(wrapped.find(Cart).length).toEqual(1);
});

it('render should be showing spinner', () => {
    expect(wrapped.find(Spinner).length).toEqual(1);
});