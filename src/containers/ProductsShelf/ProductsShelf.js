import React from 'react';
import shortid from 'shortid';

import '../../styles/containers/ProductsShelf.scss';

import Shelf from '../../components/Shelf';

const ProductsShelf = ({ content }) => {
  return (
    <section className="am-products-shelf">
      {content.map(product => {
        console.log(!!product.image);
        const {
          name,
          image,
          installments,
          regular_price: regularPrice,
          actual_price: actualPrice,
          discount_percentage: discount,
        } = product;
        return (
          <Shelf
            key={shortid.generate()}
            name={name}
            image={image || 'http://via.placeholder.com/470x594'}
            installments={installments}
            regularPrice={regularPrice}
            actualPrice={actualPrice}
            discount={discount}
          />
        );
      })}
    </section>
  );
};

export default ProductsShelf;
