import storage from '../storage';
import { registerHandler as registerRequestHandler } from '../requestHandlers';
import { registerHandler as registerResponseHandler } from '../responseHandlers';

export const registerIntercepters = (axios) => {
  registerRequestHandler(axios.interceptors.request, storage);
  registerResponseHandler(axios.interceptors.response, storage);
};

export default {
  registerIntercepters,
};
