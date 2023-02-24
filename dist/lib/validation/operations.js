"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArgumentsSum = exports.compareValueWithMaximumValue = exports.compareValueWithMinimumValue = exports.checkForNegativeNumber = exports.checkForZeroValue = void 0;
// If returns TRUE there is an Error
function checkForZeroValue(value) {
    return value === 0;
}
exports.checkForZeroValue = checkForZeroValue;
function checkForNegativeNumber(value) {
    return value < 0;
}
exports.checkForNegativeNumber = checkForNegativeNumber;
function compareValueWithMinimumValue(value, minimumValue) {
    return value < minimumValue;
}
exports.compareValueWithMinimumValue = compareValueWithMinimumValue;
function compareValueWithMaximumValue(value, maximumValue) {
    return value > maximumValue;
}
exports.compareValueWithMaximumValue = compareValueWithMaximumValue;
function checkArgumentsSum({ length, minNumbers, minSpecialCharacters, }) {
    return Number(minNumbers) + Number(minSpecialCharacters) >= length;
}
exports.checkArgumentsSum = checkArgumentsSum;
