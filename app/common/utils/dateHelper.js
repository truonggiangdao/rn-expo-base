import moment from 'moment';

/**
 * Format datetime
 * @param {String|Date} dateTime
 * @param {String} formatString
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
export const formatDateTimeByString = (dateTime, formatString) => {
  let result;
  try {
    result = moment(dateTime).format(formatString);
  } catch (error) {
    result = '';
  }
  return result === 'Invalid date' ? '' : result;
};

export default {
  formatDateTimeByString,
};
