import React from 'react';
import { Provider } from 'react-redux';
import Store from '../api/redux/store';

const CustomProvider = ({ children, initialState = {} }) => (
  <Provider store={Store(initialState)}>{children}</Provider>
);

export default CustomProvider;
