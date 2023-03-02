import { type PasswordParameters } from './interface';
import {
	upperAlphabet,
	lowerAlphabet,
	numbers,
	specialCharacters,
	latinCharacters,
} from './constants';

function createRandomPass(passwordParams: PasswordParameters): string {
	const { length, minNumbers, minSpecialCharacters } = passwordParams;
	const list = [
		upperAlphabet,
		lowerAlphabet,
		numbers,
		specialCharacters,
		latinCharacters,
	];
	const passwordArray: string[] = [];
	let numbersAmount: number = 0;
	let specialCharactersAmount: number = 0;

	function getItem(): string {
		const listSelector = Math.floor(Math.random() * 5);
		const selectedList = list[listSelector];

		const itemSelector = Math.floor(Math.random() * selectedList.length);
		const selectedItem = selectedList[itemSelector];

		if (selectedList === numbers || selectedList === specialCharacters) {
			selectedList === numbers
				? (numbersAmount += 1)
				: (specialCharactersAmount += 1);
		}

		return selectedItem;
	}

	for (let i = 0; i < length; i++) {
		const item = getItem();
		passwordArray.push(item);
	}

	if (
		numbersAmount < minNumbers ||
		specialCharactersAmount < minSpecialCharacters
	) {
		return createRandomPass({ length, minNumbers, minSpecialCharacters });
	}

	return passwordArray.join('');
}

export { createRandomPass };
