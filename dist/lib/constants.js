"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendedValues = exports.specialCharacters = exports.numbers = exports.lowerAlphabet = exports.upperAlphabet = void 0;
// Password values
const upperAlphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
exports.upperAlphabet = upperAlphabet;
const lowerAlphabet = (() => upperAlphabet.map((letter) => letter.toLowerCase()))();
exports.lowerAlphabet = lowerAlphabet;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
exports.numbers = numbers;
const specialCharacters = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '?',
    ';',
    ':',
];
exports.specialCharacters = specialCharacters;
const recommendedValues = {
    length: {
        minimum: 12,
        default: 15,
        maximum: 100,
    },
    numbers: {
        minimum: 4,
        default: 5,
        maximum: 10,
    },
    specialCharacters: {
        minimum: 4,
        default: 5,
        maximum: 10,
    },
};
exports.recommendedValues = recommendedValues;
