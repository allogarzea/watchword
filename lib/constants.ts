// Password values
const upperAlphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const lowerAlphabet = (() => upperAlphabet.map((letter) => letter.toLowerCase()))()

const numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*', '?', ';', ':'
]

const recommendedValues = {
  length: {
    minimum: 12,
    default: 15,
    maximum: 100
  },
  numbers: {
    minimum: 4,
    default: 5,
    maximum: 10
  },
  specialCharacters: {
    minimum: 4,
    default: 5,
    maximum: 10
  }
}

export {
  upperAlphabet,
  lowerAlphabet,
  numbers,
  specialCharacters,
  recommendedValues
}
