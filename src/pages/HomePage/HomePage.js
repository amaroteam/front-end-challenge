import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActionsCreator } from '../../store/ducks/products';

import '../../styles/pages/HomePage.scss';

import Toolbar from '../../containers/Toolbar';
import ProductsShelf from '../../containers/ProductsShelf';
import Overlay from '../../components/Overlay/Overlay';
import QuickView from '../../containers/QuickView';
import Minicart from '../../containers/Minicart';
import HeaderAmaro from '../../containers/HeaderAmaro/HeaderAmaro';

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
      <HeaderAmaro />
      <Toolbar intro="Produtos" />
      <Overlay />
      {memoizedShef}
      <Minicart />
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
