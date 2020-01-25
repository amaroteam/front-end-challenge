import React from 'react';
import shortid from 'shortid';

import '../../styles/containers/ProductsShelf.scss';

import Shelf from '../../components/Shelf';

const ProductsShelf = ({ content }) => {
  return (
    <section className="am-products-shelf">
      {content.map(product => {
        console.log(!!product.image);
        console.log(product);
        const {
          name,
          image,
          installments,
          color,
          code_color: codeColor,
          regular_price: regularPrice,
          actual_price: actualPrice,
          discount_percentage: discount,
        } = product;
        const link = name.replace(/\s+/g, '-').toLowerCase();
        console.log(link);
        return (
          <Shelf
            key={shortid.generate()}
            name={name}
            image={image || 'http://via.placeholder.com/470x594'}
            installments={installments}
            regularPrice={regularPrice}
            actualPrice={actualPrice}
            discount={discount}
            colorName={color}
            color={`https://cdn.amaro.com/uploads/icons/${codeColor}.gif`}
          />
        );
      })}
    </section>
  );
};

export default ProductsShelf;
