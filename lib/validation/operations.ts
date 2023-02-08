import { type PasswordParameters } from '../interface';

// If returns TRUE there is an Error

function checkForZeroValue(value: number): boolean {
	return value === 0;
}

function checkForNegativeNumber(value: number): boolean {
	return value < 0;
}

function compareValueWithMinimumValue(
	value: number,
	minimumValue: number
): boolean {
	return value < minimumValue;
}

function compareValueWithMaximumValue(
	value: number,
	maximumValue: number
): boolean {
	return value > maximumValue;
}

function checkArgumentsSum({
	length,
	minNumbers,
	minSpecialCharacters,
}: PasswordParameters): boolean {
	return Number(minNumbers) + Number(minSpecialCharacters) >= length;
}

export {
	checkForZeroValue,
	checkForNegativeNumber,
	compareValueWithMinimumValue,
	compareValueWithMaximumValue,
	checkArgumentsSum,
};
