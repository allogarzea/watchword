"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForErrorsInParameters = exports.validateParams = void 0;
const chalk_1 = __importDefault(require("chalk"));
const messages_1 = require("./messages");
const operations_1 = require("./operations");
const constants_1 = require("../constants");
const confirmation_1 = __importDefault(require("../../commands/confirmation"));
const log = (message) => {
    console.log(message);
};
const checkForErrorsInParameters = (passwordParams) => {
    const { length, minNumbers, minSpecialCharacters } = passwordParams;
    // LENGTH ERRORS
    if ((0, operations_1.checkForNegativeNumber)(length)) {
        log(chalk_1.default.red(messages_1.PARAMS_ERRORS.LENGTH_IS_NEGATIVE));
        return 'stop';
    }
    if ((0, operations_1.checkForZeroValue)(length)) {
        log(chalk_1.default.red(messages_1.PARAMS_ERRORS.LENGTH_IS_ZERO));
        return 'stop';
    }
    // NUMBER ERRORS
    if ((0, operations_1.checkForNegativeNumber)(minNumbers)) {
        log(chalk_1.default.red(messages_1.PARAMS_ERRORS.NUMBER_ARGUMENT_IS_NEGATIVE));
        return 'stop';
    }
    // SPECIAL CHARACTERS ERRORS
    if ((0, operations_1.checkForNegativeNumber)(minSpecialCharacters)) {
        log(chalk_1.default.red(messages_1.PARAMS_ERRORS.SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE));
        return 'stop';
    }
    // ALL ARGUMENTS ERRORS
    if ((0, operations_1.checkArgumentsSum)(passwordParams)) {
        log(chalk_1.default.red(messages_1.PARAMS_ERRORS.NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH));
        return 'stop';
    }
    // LENGTH WARNING
    if ((0, operations_1.compareValueWithMinimumValue)(length, constants_1.recommendedValues.length.minimum)) {
        log(chalk_1.default.yellow(messages_1.PARAMS_WARNING.LENGTH_IS_LESS_THAN_RECOMMENDED));
        return 'warn';
    }
    if ((0, operations_1.compareValueWithMaximumValue)(length, constants_1.recommendedValues.length.maximum)) {
        log(chalk_1.default.yellow(messages_1.PARAMS_WARNING.LENGTH_IS_GREATER_THAN_RECOMMENDED));
        return 'warn';
    }
    // NUMBER WARNING
    if ((0, operations_1.compareValueWithMinimumValue)(minNumbers, constants_1.recommendedValues.numbers.minimum)) {
        log(chalk_1.default.yellow(messages_1.PARAMS_WARNING.NUMBER_IS_LESS_THAN_RECOMMENDED));
        return 'warn';
    }
    if ((0, operations_1.compareValueWithMaximumValue)(minNumbers, constants_1.recommendedValues.numbers.maximum)) {
        log(chalk_1.default.yellow(messages_1.PARAMS_WARNING.NUMBER_IS_GREATER_THAN_RECOMMENDED));
        return 'warn';
    }
    // SPECIAL CHARACTERS WARNING
    if ((0, operations_1.compareValueWithMinimumValue)(minSpecialCharacters, constants_1.recommendedValues.specialCharacters.minimum)) {
        log(chalk_1.default.yellow(messages_1.PARAMS_WARNING.SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED));
        return 'warn';
    }
    if ((0, operations_1.compareValueWithMaximumValue)(minNumbers, constants_1.recommendedValues.numbers.maximum)) {
        log(chalk_1.default.yellow(messages_1.PARAMS_WARNING.SPECIAL_CHARACTERS_IS_GREATER_THAN_RECOMMENDED));
        return 'warn';
    }
    else {
        return 'keep';
    }
};
exports.checkForErrorsInParameters = checkForErrorsInParameters;
const validateParams = (passwordParams) => {
    const response = checkForErrorsInParameters(passwordParams);
    switch (response) {
        case 'stop':
            return false;
        case 'warn': {
            (0, confirmation_1.default)(passwordParams);
            return;
        }
        case 'keep':
        default:
            return true;
    }
};
exports.validateParams = validateParams;
