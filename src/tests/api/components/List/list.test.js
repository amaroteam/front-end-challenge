import React from 'react';
import List from '../../../../components/List/index';
import ProductList from '../../../../components/List/ProductList/index';
import renderer from 'react-test-renderer';
import CustomProvider from '../../../../../src/provider/index';

const dataProduct = [{
    
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
}];


describe("List Component", () => {
  test("Wrapper list component test", () => {
    const tree = renderer.create( 
    <CustomProvider>
       <List />
    </CustomProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Wrapper product list component test", () => {
    const tree = renderer.create( 
    <CustomProvider>
       <ProductList products={dataProduct}  />
    </CustomProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});