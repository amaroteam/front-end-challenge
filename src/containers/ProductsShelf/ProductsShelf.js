/* eslint-disable react/forbid-prop-types */
import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as QuickViewActionsCreator } from '../../store/ducks/quickview';
import { Creators as OverlayActionsCreator } from '../../store/ducks/overlay';

import '../../styles/containers/ProductsShelf.scss';

import Shelf from '../../components/Shelf';
import Container from '../../layout/Container';

const ProductsShelf = ({
  content,
  quickViewActions,
  overlayActions,
}) => {
  const { productQuickView, toggleQuickView } = quickViewActions;
  const { toggleOverlay } = overlayActions;

  const handleOpenProduct = product => {
    productQuickView(product);
    toggleOverlay(true);
    toggleQuickView(true);
  };

  return (
    <Container>
      <section className="am-products-shelf">
        {content.map(product => {
          const {
            name,
            image,
            installments,
            color,
            // url,
            regular_price: regularPrice,
            actual_price: actualPrice,
            discount_percentage: discount,
            bullet_color: bulletColor,
          } = product;

          return (
            <Shelf
              key={shortid.generate()}
              // url={url}
              name={name}
              image={image || 'http://via.placeholder.com/470x594'}
              installments={installments}
              regularPrice={regularPrice}
              actualPrice={actualPrice}
              discount={discount}
              colorName={color}
              color={bulletColor}
              onClick={() => handleOpenProduct(product)}
            />
          );
        })}
      </section>
    </Container>
  );
};

ProductsShelf.propTypes = {
  content: PropTypes.array.isRequired,
  quickViewActions: PropTypes.object.isRequired,
  overlayActions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  overlayActions: bindActionCreators(OverlayActionsCreator, dispatch),
  quickViewActions: bindActionCreators(
    QuickViewActionsCreator,
    dispatch,
  ),
});

export default connect(null, mapDispatchToProps)(ProductsShelf);
