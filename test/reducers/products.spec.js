import expect from 'expect';
import { REHYDRATE } from 'redux-persist/constants';

import reducers from 'reducers/index';
import { productsState } from 'reducers/products';
import { ActionTypes } from 'constants/index';
// import {  } from 'actions';

describe('• Products', () => {
  it('should return the initial state', () => {
    expect(reducers.products(undefined, {}))
      .toEqual(productsState);
  });

  it(`should handle ${REHYDRATE}`, () => {
    expect(reducers.products(undefined, {
      type: REHYDRATE,
      payload: {
        products: {}
      }
    }))
      .toEqual(Object.assign({}, productsState, { rehydrated: true }, {}));
  });

  it(`should handle ${ActionTypes.LOAD_PRODUCTS}`, () => {
    const items = [{ name: 1 }, { name: 2 }];
    expect(reducers.products(undefined, {
      type: ActionTypes.LOAD_PRODUCTS,
      payload: items
    }))
      .toEqual({ ...productsState, items });
  });
});

