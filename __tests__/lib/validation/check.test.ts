import chalk from 'chalk';
import { checkForErrorsInParameters } from '../../../lib/validation/check';
import { PARAMS_ERRORS } from '../../../lib/validation/messages';

afterEach(() => {
	jest.clearAllMocks();
});

const spy = jest.spyOn(console, 'log');

describe('checkForErrorsInParameters', () => {
	it('Should stop when length is negative', () => {
		const result = checkForErrorsInParameters({
			length: -10,
			minNumbers: 2,
			minSpecialCharacters: 3,
		});

		expect(spy).toBeCalledWith(chalk.red(PARAMS_ERRORS.LENGTH_IS_NEGATIVE));
		expect(result).toBe('stop');
	});

	it('Should stop when length is zero', () => {
		const result = checkForErrorsInParameters({
			length: 0,
			minNumbers: 2,
			minSpecialCharacters: 3,
		});

		expect(spy).toBeCalledWith(chalk.red(PARAMS_ERRORS.LENGTH_IS_ZERO));
		expect(result).toBe('stop');
	});
});
