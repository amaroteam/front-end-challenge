import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://testapi.io/api/sergiokopplin',
});

export { axiosInstance };
