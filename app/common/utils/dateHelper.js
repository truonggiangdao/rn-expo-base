import moment from 'moment';

/**
 * Format datetime
 * @param {String|Date} formatString
 * @param {String} dateTime
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
function formatDateTimeByString(formatString, dateTime) {
  let result;
  try {
    result = moment(dateTime).format(formatString);
  } catch (error) {
    result = '';
  }
  return result;
}

export default {
  formatDateTimeByString,
};
