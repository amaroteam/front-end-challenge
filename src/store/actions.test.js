import {
  addProductToCart,
  deleteProductFromCart,
  updateProductFromCart,
  loadProducts,
} from './actions';

describe('actions', () => {
  it('addProductToCart:', () => {
    const params = {
      product: {
        product: 1,
      },
      selectedSize: {
        size: 1,
      },
    };

    expect(addProductToCart(params)).toEqual({
      type: 'ADD_PRODUCT_CART',
      product: {
        product: 1,
      },
      selectedSize: {
        size: 1,
      },
    });
  });

  it('deleteProductFromCart:', () => {
    expect(deleteProductFromCart(1)).toEqual({
      type: 'DELETE_PRODUCT_CART',
      id: 1,
    });
  });

  it('updateProductFromCart:', () => {
    const product = {
      product: 1,
    };

    expect(updateProductFromCart(product)).toEqual({
      type: 'EDIT_PRODUCT_CART',
      product,
    });
  });

  it('loadProducts:', () => {
    const list = {
      list: [],
    };

    expect(loadProducts(list)).toEqual({
      type: 'LOAD_PRODUCTS',
      list,
    });
  });
});
