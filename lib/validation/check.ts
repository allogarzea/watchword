import chalk from 'chalk'
import confirmationQuestion from '../../commands/confirmation'
import { type PasswordParameters } from '../interface'
import { PARAMS_ERRORS, PARAMS_WARNING } from './messages'
import { checkArgumentsSum, checkForNegativeNumber, checkForZeroValue, compareValueWithMaximumValue, compareValueWithMinimumValue } from './operations'
import { recommendedValues } from '../constants'

const log = console.log

const checkForErrorsInParameters = (passwordParams: PasswordParameters): string => {
  const { length, minNumbers, minSpecialCharacters } = passwordParams

  // LENGTH ERRORS
  if (checkForNegativeNumber(length)) {
    log(chalk.red(PARAMS_ERRORS.LENGTH_IS_NEGATIVE))
    return 'stop'
  } if (checkForZeroValue(length)) {
    log(chalk.red(PARAMS_ERRORS.LENGTH_IS_ZERO))
    return 'stop'
  }

  // NUMBER ERRORS
  if (checkForNegativeNumber(minNumbers)) {
    log(chalk.red(PARAMS_ERRORS.NUMBER_ARGUMENT_IS_NEGATIVE))
    return 'stop'
  }

  // SPECIAL CHARACTERS ERRORS
  if (checkForNegativeNumber(minSpecialCharacters)) {
    log(chalk.red(PARAMS_ERRORS.SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE))
    return 'stop'
  }

  // ALL ARGUMENTS ERRORS
  if (checkArgumentsSum(passwordParams)) {
    log(chalk.red(PARAMS_ERRORS.NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH))
    return 'stop'
  }

  // LENGTH WARNING
  if (compareValueWithMinimumValue(length, recommendedValues.length.minimum)) {
    log(chalk.yellow(PARAMS_WARNING.LENGTH_IS_LESS_THAN_RECOMMENDED))
    return 'warn'
  }
  if (compareValueWithMaximumValue(length, recommendedValues.length.maximum)) {
    log(chalk.yellow(PARAMS_WARNING.LENGTH_IS_GREATER_THAN_RECOMMENDED))
    return 'warn'
  }

  // NUMBER WARNING
  if (compareValueWithMinimumValue(minNumbers, recommendedValues.numbers.minimum)) {
    log(chalk.yellow(PARAMS_WARNING.NUMBER_IS_LESS_THAN_RECOMMENDED))
    return 'warn'
  }
  if (compareValueWithMaximumValue(minNumbers, recommendedValues.numbers.maximum)) {
    log(chalk.yellow(PARAMS_WARNING.NUMBER_IS_GREATER_THAN_RECOMMENDED))
    return 'warn'
  }

  // SPECIAL CHARACTERS WARNING
  if (compareValueWithMinimumValue(minSpecialCharacters, recommendedValues.specialCharacters.minimum)) {
    log(chalk.yellow(PARAMS_WARNING.SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED))
    return 'warn'
  } if (compareValueWithMaximumValue(minNumbers, recommendedValues.numbers.maximum)) {
    log(chalk.yellow(PARAMS_WARNING.SPECIAL_CHARACTERS_IS_GREATER_THAN_RECOMMENDED))
    return 'warn'
  } else {
    return 'keep'
  }
}

const validateParams = (passwordParams: PasswordParameters): any => {
  const response = checkForErrorsInParameters(passwordParams)
  switch (response) {
    case 'stop':
      return false
    case 'warn':
      return confirmationQuestion(passwordParams)
    case 'keep':
    default:
      return true
  }
}

export {
  validateParams
}
