import expect, { createSpy } from 'expect';

import * as products from 'actions/products';
import { ActionTypes } from 'constants/index';

const dispatch = createSpy();
const getState = createSpy();

describe('products', () => {
  afterEach(() => {
    dispatch.reset();
  });

  it(`should dispatch ${ActionTypes.LOAD_PRODUCTS}`, () => {
    products.loadProducts([{ sku: 1 }])(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.LOAD_PRODUCTS,
      payload: [{ sku: 1 }]
    });
  });
});
