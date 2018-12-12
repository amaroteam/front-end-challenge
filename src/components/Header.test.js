import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('check if Header renders', () => {
  expect(shallow(<Header />)).toHaveLength(1);
});
