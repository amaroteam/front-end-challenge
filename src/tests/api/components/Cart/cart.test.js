import React from 'react';
import Cart from '../../../../components/Cart/index';
import ProductCart from '../../../../components/Cart/ProductCart/index';
import renderer from 'react-test-renderer';
import CustomProvider from '../../../../../src/provider/index';

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


describe("Cart Component", () => {
  test("Wrapper cart component test", () => {
    const tree = renderer.create( 
    <CustomProvider>
       <Cart />
    </CustomProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Wrapper product cart component test", () => {
    const tree = renderer.create( 
    <CustomProvider>
       <ProductCart product={dataProduct} 
        changeProductQuantity={() => console.log('run')} 
        removeProduct ={() => console.log('run')}  />
    </CustomProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});