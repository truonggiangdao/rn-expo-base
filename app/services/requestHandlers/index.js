import { setTokenHeader } from './token';

export const registerHandler = (request, appStorage) => {
  request.use((config) => {
    let newConfig = { ...config };
    newConfig = setTokenHeader(config, appStorage);
    // do something else before request is sent:
    // newConfig = doSomeThingElse(newConfig, appStorage);
    // then return newConfig
    return newConfig;
  });
};

export default {
  registerHandler,
};
