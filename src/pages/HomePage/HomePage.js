import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActionsCreator } from '../../store/ducks/products';

import '../../styles/pages/HomePage.scss';

import ProductsShelf from '../../containers/ProductsShelf';
import Toolbar from '../../containers/Toolbar';
import Overlay from '../../components/Overlay/Overlay';
import QuickView from '../QuickView';

const HomePage = ({ getProducts, products, changed }) => {
  useEffect(() => {
    getProducts();
  }, []);

  const memoizedShef = useMemo(
    () => <ProductsShelf content={products} />,
    [products.length && changed],
  );

  return (
    <>
      <Overlay />
      <Toolbar intro="Produtos" />
      {memoizedShef}
      {/* <ProductsShelf content={products} /> */}
      <QuickView />
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products.data.map(product => ({
    ...product,
    url: product.name.replace(/\s+/g, '-').toLowerCase(),
    bullet_color: `https://cdn.amaro.com/uploads/icons/${product.code_color}.gif`,
  })),
  changed: state.products.changed,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActionsCreator, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
