// Password values
const upperAlphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const lowerAlphabet = (() => upperAlphabet.map((letter) => letter.toLowerCase()))();

const numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '?', ';', ':'
]

// Default values
const defaultPasswordParams = {
	size: 15,
	minNumbers: 5,
	minSpecialCharacters: 5
};

export {
    upperAlphabet,
    lowerAlphabet,
    numbers,
    specialCharacters,
	defaultPasswordParams
}
