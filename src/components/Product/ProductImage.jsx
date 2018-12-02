import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';

const ProductImage = ({
  image,
  onSale,
  discount,
  altAttr,
}) => (
  <figure className="product__image">
    {onSale
      && <Badge discount={discount} />
    }
    {image
      ? <img src={image} alt={`Produto ${altAttr}`} title={altAttr} />
      : (
        <img
          src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
          alt={`Produto ${altAttr}`}
          title={altAttr}
          className="product__placeholder"
        />
      )
    }
  </figure>
);

ProductImage.propTypes = {
  image: PropTypes.string,
  onSale: PropTypes.bool,
  discount: PropTypes.string,
  altAttr: PropTypes.string,
};

ProductImage.defaultProps = {
  image: '',
  onSale: false,
  discount: '',
  altAttr: '',
};


export default ProductImage;
