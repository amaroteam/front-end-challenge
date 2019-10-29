import { GET_PRODUCTS } from './actionTypes';
import { serviceGet } from '../../../services'

import  endpointGetProducts  from '../../../endpoint';

export const getProducts = callback => async dispatch => {
  try {
    const productsResponse = await serviceGet(endpointGetProducts);
    if (!!callback) {
      callback();
    }
    return dispatch({
      type: GET_PRODUCTS,
      payload: productsResponse.data.products
    });
  } catch(e) {
    console.log(e);
  }
};

