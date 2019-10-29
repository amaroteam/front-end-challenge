import * as actions from '../../../../../api/redux/reducers/cart/actions';
import * as types from '../../../../../api/redux/reducers/cart/actionTypes';

const dataProduct = {
    name: "CASACO WHITE FUR",
    style: "20002648",
    sku: "5891_1000058_0_PP",
    code_color: "20002648_029",
    color_slug: "off-white",
    color: "OFF-WHITE",
    on_sale: false,
    regular_price: "R$ 239,90",
    actual_price: "R$ 239,90",
    variant: 'PP',
    discount_percentage: "",
    installments: "3x R$ 79,97",
    image: "https://d3l7rqep7l31az.cloudfront.net/images/products/20002648_029_catalog_1.jpg?1459552552",
};

describe('removing a product', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.REMOVE_PRODUCT,
        payload: dataProduct
      };

      expect(actions.removeProduct(dataProduct)).toEqual(expectedAction);
    });
  });

describe('cart result actions', () => {
  describe('loading Cart', () => {
    it('should return an expected payload', () => {
      const expectedAction = {
        type: types.LOAD_CART,
        payload: dataProduct
      };

      expect(actions.loadCart(dataProduct)).toEqual(expectedAction);
    });
  });

  describe('adding some product', () => {
    it('should return an expected payload', () => {
      const expectedAction = {
        type: types.ADD_PRODUCT,
        payload: dataProduct
      };

      expect(actions.addProduct(dataProduct)).toEqual(expectedAction);
    });
  });
});
