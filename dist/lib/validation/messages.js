"use strict";
// ERROR MESSAGES
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARAMS_WARNING = exports.PARAMS_ERRORS = void 0;
const constants_1 = require("../constants");
const LENGTH_IS_ZERO = 'ERROR: Check the length argument, it must be greater than zero';
const LENGTH_IS_NEGATIVE = 'ERROR: Check the length argument, it must be a positive number';
const NUMBER_ARGUMENT_IS_NEGATIVE = 'ERROR: Check the number argument, it cannot be a negative value';
const SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE = 'ERROR: Check the special characters argument, it cannot be a negative value';
const NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH = 'ERROR: Check the password parameters, numbers plus special characters must be less than the length';
const PARAMS_ERRORS = {
    LENGTH_IS_ZERO,
    LENGTH_IS_NEGATIVE,
    NUMBER_ARGUMENT_IS_NEGATIVE,
    SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE,
    NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH,
};
exports.PARAMS_ERRORS = PARAMS_ERRORS;
// WARNING MESSAGES
const LENGTH_IS_LESS_THAN_RECOMMENDED = `WARNING: We do not recommend that the password length be less than ${constants_1.recommendedValues.length.minimum} digits`;
const NUMBER_IS_LESS_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain less than ${constants_1.recommendedValues.numbers.minimum} numbers`;
const SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain less than ${constants_1.recommendedValues.specialCharacters.minimum} special characters`;
const LENGTH_IS_GREATER_THAN_RECOMMENDED = `WARNING: We do not recommend that the password length be greater than ${constants_1.recommendedValues.length.maximum} digits`;
const NUMBER_IS_GREATER_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain greater than ${constants_1.recommendedValues.numbers.maximum} numbers`;
const SPECIAL_CHARACTERS_IS_GREATER_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain greater than ${constants_1.recommendedValues.specialCharacters.maximum} special characters`;
const PARAMS_WARNING = {
    LENGTH_IS_LESS_THAN_RECOMMENDED,
    NUMBER_IS_LESS_THAN_RECOMMENDED,
    SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED,
    LENGTH_IS_GREATER_THAN_RECOMMENDED,
    NUMBER_IS_GREATER_THAN_RECOMMENDED,
    SPECIAL_CHARACTERS_IS_GREATER_THAN_RECOMMENDED,
};
exports.PARAMS_WARNING = PARAMS_WARNING;
