/* eslint no-useless-escape: 0 */

function isSpecialCharacter(str) {
  return !/[~`!#$%@\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g.test(str);
}

function isNumericAndLetterCharacter(str) {
  if (str !== '') {
    return /^[0-9a-zA-Z]+$/g.test(str);
  }
  return true;
}

export default {
  isSpecialCharacter,
  isNumericAndLetterCharacter,
};
