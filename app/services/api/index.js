import axios from 'axios';
import { registerIntercepters } from './intercepters';
import { API_URL } from '../../common/constants/url';

const restApi = axios.create({
  baseURL: API_URL,
  headers: {
    post: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  },
});

registerIntercepters(restApi);

export default restApi;
