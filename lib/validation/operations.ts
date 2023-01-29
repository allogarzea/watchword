import { PasswordGenerator } from "../interface";

// If returns TRUE there is an Error

function checkForZeroValue(value: number) {
    return value === 0 ? true : false;
}

function checkForNegativeNumber(value: number) {
    return value < 0 ? true : false;
}

function compareValueWithMinimumValue(value: number, minimumValue: number) {
    return value < minimumValue ? true : false;
}

function checkArgumentsSum({length, minNumbers, minSpecialCharacters}: PasswordGenerator) {
    return (Number(minNumbers) + Number(minSpecialCharacters)) >= length ? true : false;
}

export {
    checkForZeroValue,
    checkForNegativeNumber,
    compareValueWithMinimumValue,
    checkArgumentsSum
}