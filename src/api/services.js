import axios from 'axios';
import error from './error';

const serviceGet = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (err) {
    return error(err);
  }
};

const servicePost = async (url, data, config) => {
  try {
    const response = await axios.post(url, data, config);
    return response;
  } catch (err) {
    return error(err);
  }
};

const servicePut = async (url, data, config) => {
  try {
    const response = await axios.put(url, data, config);
    return response;
  } catch (err) {
    return error(err);
  }
};

const servicePatch = async (url, data, config) => {
  try {
    const response = await axios.patch(url, data, config);
    return response;
  } catch (err) {
    return error(err);
  }
};

const serviceDelete = async url => {
  try {
    const response = await axios.delete(url);
    return response;
  } catch (err) {
    return error(err);
  }
};

export { serviceGet, servicePost, servicePut, serviceDelete, servicePatch };
