import { Creators } from './products';
import api from '../../services/api';

const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
} = Creators;

const fetchProductsThunk = () => (
  async (dispatch) => {
    await dispatch(fetchProductsStart());

    return api.getProducts()
      .then((response) => {
        dispatch(fetchProductsSuccess(response));
        return response;
      })
      .catch(error => dispatch(fetchProductsError(error)));
  }
);

export default fetchProductsThunk;
