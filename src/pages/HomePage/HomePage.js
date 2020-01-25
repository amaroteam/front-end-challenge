import React from 'react';
import Container from '../../layout/Container';
import Shelf from '../../components/Shelf';

const HomePage = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Shelf
        image="https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_440,q_auto:best/v11576780009/https://cdn.amaro.com/images/products/20013513_296_original_1.jpg"
        name="VESTIDO TRANSPASSE BOW"
        actualPrice="R$ 199,90"
        regularPrice="R$ 199,90"
        installments="3x R$ 66,63"
      />
      <Shelf
        image="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
        name="VESTIDO TRANSPASSE BOW"
        actualPrice="R$ 199,90"
        regularPrice="R$ 199,90"
        installments="3x R$ 66,63"
        discount="12%"
      />
    </Container>
  );
};
export default HomePage;
