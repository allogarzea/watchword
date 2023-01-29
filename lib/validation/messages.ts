// ERROR MESSAGES

const LENGTH_IS_ZERO = "ERROR: Check the length argument, it must be greater than zero";
const LENGTH_IS_NEGATIVE = "ERROR: Check the length argument, it must be greater than zero";
const NUMBER_ARGUMENT_IS_NEGATIVE = "ERROR: Check the number argument, it cannot be a negative value";
const SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE = "ERROR: Check the special characters argument, it cannot be a negative value";

const NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH = "ERROR: Check the password parameters, numbers plus special characters must be less than the length";

const PARAMS_ERRORS = {
    LENGTH_IS_ZERO,
    LENGTH_IS_NEGATIVE,
    NUMBER_ARGUMENT_IS_NEGATIVE,
    SPECIAL_CHARACTERS_ARGUMENT_IS_NEGATIVE,
    NUMBERS_PLUS_SPECIAL_BIGGER_THAN_LENGTH
};

// WARNING MESSAGES

const LENGTH_IS_LESS_THAN_RECOMMENDED = "WARNING: We do not recommend that the password length be less than 12 digits"
const NUMBER_IS_LESS_THAN_RECOMMENDED = "WARNING: We do not recommend that the password contain less than 4 numbers"
const SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED = "WARNING: We do not recommend that the password contain less than 4 special characters"

const PARAMS_WARNING = {
    LENGTH_IS_LESS_THAN_RECOMMENDED,
    NUMBER_IS_LESS_THAN_RECOMMENDED,
    SPECIAL_CHARACTERS_IS_LESS_THAN_RECOMMENDED
}

export {
    PARAMS_ERRORS,
    PARAMS_WARNING
};