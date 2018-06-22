/* eslint no-useless-escape: 0 */

export const isSpecialCharacter = str => (
  /[~`!#$%@\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g.test(str)
);

export const isNumericAndLetterCharacter = str => (
  str === '' || /^[0-9a-zA-Z]+$/g.test(str)
);

export default {
  isSpecialCharacter,
  isNumericAndLetterCharacter,
};
