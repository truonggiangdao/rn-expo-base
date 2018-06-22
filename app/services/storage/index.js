import { AsyncStorage } from 'react-native';

/**
 * Find an item from Storage by key
 * @param {String} key
 * @returns {Promise} return a Promise
 */
export const getItem = key => AsyncStorage.getItem(key);

/**
 * Set an item to Storage by key
 * @param {String} key
 * @param {any} data
 * @returns {Promise} return a Promise
 */
export const setItem = (key, data) => AsyncStorage.setItem(key, data);

export default {
  getItem,
  setItem,
};
