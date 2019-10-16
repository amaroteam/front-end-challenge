import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState } from '../store/reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

// eslint-disable-next-line react/prop-types
export const WithStore = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

// eslint-disable-next-line react/prop-types
export const WithRouter = ({ children }) => <Router>{children}</Router>;
