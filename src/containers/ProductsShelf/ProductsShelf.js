import React from 'react';
import shortid from 'shortid';

import '../../styles/containers/ProductsShelf.scss';

import Shelf from '../../components/Shelf';
import Container from '../../layout/Container';

const ProductsShelf = ({ content }) => {
  const handleOpenProduct = () => {
    console.log('eae');
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
            url,
            regular_price: regularPrice,
            actual_price: actualPrice,
            discount_percentage: discount,
            bullet_color: bulletColor,
          } = product;

          return (
            <Shelf
              key={shortid.generate()}
              url={url}
              name={name}
              image={image || 'http://via.placeholder.com/470x594'}
              installments={installments}
              regularPrice={regularPrice}
              actualPrice={actualPrice}
              discount={discount}
              colorName={color}
              color={bulletColor}
              onClick={ev => handleOpenProduct(ev)}
            />
          );
        })}
      </section>
    </Container>
  );
};

export default ProductsShelf;
