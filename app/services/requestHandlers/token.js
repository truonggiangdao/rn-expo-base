export const setTokenHeader = (config, appStorage) => {
  // Get token from storage
  const token = appStorage.getItem('token');
  // set token to request's header before sending to REST api
  if (token) {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
    return newConfig;
  }
  return config;
};

export default {
  setTokenHeader,
};
