import moment from 'moment'

/**
 * Format datetime
 * @param {String|Date} formatString
 * @param {String} dateTime
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
function formatDateTimeByString(formatString, dateTime) {
  try {
    const result = moment(dateTime).format(formatString)
    return result
  } catch (error) {
    return ''
  }
}

export const DateTimeHelper = {
  formatDateTimeByString,
}