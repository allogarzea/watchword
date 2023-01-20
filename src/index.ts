import { upperAlphabet, lowerAlphabet, numbers, specialCharacters } from "./values";
import { argv } from 'node:process';

const size = argv[2];
const minNumbers = argv[3];
const minSpecialCharacters = argv[4];

const createRandomPass: Function = (size: number, minNumbers: number, minSpecialCharacters: number) => {
    let passwordArray: any = [];
    let numbersAmount: number = 0;
    let specialCharactersAmount: number = 0;
    const list = [upperAlphabet, lowerAlphabet, numbers, specialCharacters]

    const getItem = () => {
        const listSelector = Math.floor(Math.random() * 4);
        const selectedList = list[listSelector]; 

        const itemSelector = Math.floor(Math.random() * selectedList.length);
        const selectedItem = selectedList[itemSelector];

        if (selectedList === numbers || selectedList === specialCharacters) {
            selectedList === numbers ? numbersAmount += 1 : specialCharactersAmount += 1
        }
        
        return selectedItem;
    }

    function mountPassword() {
        for (let i = 0; i < size; i++) {
            const item = getItem();
            passwordArray.push(item);
        }
    };

    mountPassword();

    if ((numbersAmount < minNumbers) || (specialCharactersAmount < minSpecialCharacters)) {
        return createRandomPass(size, minNumbers, minSpecialCharacters);
    }

    return { password: passwordArray.join(''), passwordArray: passwordArray };
}

export default createRandomPass;

console.log(createRandomPass(size || 15, minNumbers || 4, minSpecialCharacters || 5).password);