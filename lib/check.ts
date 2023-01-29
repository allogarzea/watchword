import chalk from 'chalk';
import { PasswordGenerator } from "./interface";
import { PARAMS_ERRORS, PARAMS_WARNING } from './messages';
import { checkArgumentsSum, checkForNegativeNumber, checkForZeroValue, compareValueWithMinimumValue } from './operations';
import { recommendedValues } from './values';

const log = console.log;

const checkForErrorsInParameters = (passwordParams: PasswordGenerator) => {
    const { length, minNumbers, minSpecialCharacters } = passwordParams;
    
    // LENGTH ERRORS
    if (checkForNegativeNumber(length)) {
        log(chalk.red(PARAMS_ERRORS.LENGTH_IS_NEGATIVE));
        return false;
    } if (checkForZeroValue(length)) {
        log(chalk.red(PARAMS_ERRORS.LENGTH_IS_ZERO));
        return false;
    } 

    // NUMBER ERRORS
    if (checkForNegativeNumber(minNumbers)) {
        log(chalk.red(PARAMS_ERRORS.NUMBER_ARGUMENT_IS_NEGATIVE));
        return false;
    } 

    // SPECIAL CHARACTERS ERRORS
    if (checkForNegativeNumber(minSpecialCharacters)) {
        log(chalk.red(PARAMS_ERRORS.SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE));
        return false;
    } 

    // ALL ARGUMENTS ERRORS
    if (checkArgumentsSum(passwordParams)) {
        log(chalk.red(PARAMS_ERRORS.NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH));
        return false;
    } 

    // LENGTH WARNING
    if (compareValueWithMinimumValue(length, recommendedValues.length.minimum)) {
        log(chalk.yellow(PARAMS_WARNING.LENGTH_IS_LESS_THAN_RECOMMENDED));
        return false;
    } 

    // NUMBER WARNING
    if (compareValueWithMinimumValue(minNumbers, recommendedValues.numbers.minimum)) {
        log(chalk.yellow(PARAMS_WARNING.NUMBER_IS_LESS_THAN_RECOMMENDED));
        return false;
    } 

    // SPECIAL CHARACTERS WARNING
    if (compareValueWithMinimumValue(minSpecialCharacters, recommendedValues.specialCharacters.minimum)) {
        log(chalk.yellow(PARAMS_WARNING.SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED));
        return false;
    } 

    // NO ERRORS OR WARNINGS
    else {
        return true;
    }
}

export {
    checkForErrorsInParameters
}