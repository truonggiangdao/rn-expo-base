/* eslint no-useless-escape: 0 */

export const isSpecialCharacter = (str) => {
  return /[~`!#$%@\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g.test(str);
};

export const isNumericAndLetterCharacter = (str) => {
  if (str !== '') {
    return /^[0-9a-zA-Z]+$/g.test(str);
  }
  return true;
};

export default {
  isSpecialCharacter,
  isNumericAndLetterCharacter,
};
