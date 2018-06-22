function isSpecialCharacter(str) {
  return !/[~`!#$%@\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g.test(str)
}

function isNumericAndLetterCharacter(str) {
  if (str !== '') {
    return /^[0-9a-zA-Z]+$/g.test(str)
  } else {
    return true
  }
}

export const StringHelper = {
  isSpecialCharacter,
  isNumericAndLetterCharacter,
}
