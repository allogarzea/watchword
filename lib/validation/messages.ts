// ERROR MESSAGES

import { recommendedValues } from '../constants';

const LENGTH_IS_ZERO =
	'ERROR: Check the length argument, it must be greater than zero';
const LENGTH_IS_NEGATIVE =
	'ERROR: Check the length argument, it must be a positive number';
const NUMBER_ARGUMENT_IS_NEGATIVE =
	'ERROR: Check the number argument, it cannot be a negative value';
const SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE =
	'ERROR: Check the special characters argument, it cannot be a negative value';

const NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH =
	'ERROR: Check the password parameters, numbers plus special characters must be less than the length';

const PARAMS_ERRORS = {
	LENGTH_IS_ZERO,
	LENGTH_IS_NEGATIVE,
	NUMBER_ARGUMENT_IS_NEGATIVE,
	SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE,
	NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH,
};

// WARNING MESSAGES

const LENGTH_IS_LESS_THAN_RECOMMENDED = `WARNING: We do not recommend that the password length be less than ${recommendedValues.length.minimum} digits`;
const NUMBER_IS_LESS_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain less than ${recommendedValues.numbers.minimum} numbers`;
const SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain less than ${recommendedValues.specialCharacters.minimum} special characters`;

const LENGTH_IS_GREATER_THAN_RECOMMENDED = `WARNING: We do not recommend that the password length be greater than ${recommendedValues.length.maximum} digits`;
const NUMBER_IS_GREATER_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain greater than ${recommendedValues.numbers.maximum} numbers`;
const SPECIAL_CHARACTERS_IS_GREATER_THAN_RECOMMENDED = `WARNING: We do not recommend that the password contain greater than ${recommendedValues.specialCharacters.maximum} special characters`;

const PARAMS_WARNING = {
	LENGTH_IS_LESS_THAN_RECOMMENDED,
	NUMBER_IS_LESS_THAN_RECOMMENDED,
	SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED,
	LENGTH_IS_GREATER_THAN_RECOMMENDED,
	NUMBER_IS_GREATER_THAN_RECOMMENDED,
	SPECIAL_CHARACTERS_IS_GREATER_THAN_RECOMMENDED,
};

export { PARAMS_ERRORS, PARAMS_WARNING };
