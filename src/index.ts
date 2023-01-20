import { upperAlphabet, lowerAlphabet, numbers, specialCharacters } from "./values";


const createRandomPass: Function = (size: number, minNumbers: number, minSpecialCharacters: number) => {
    let password: any = [];
    const list = [upperAlphabet, lowerAlphabet, numbers, specialCharacters]

    const getItem = () => {
        const listSelector = Math.floor(Math.random() * 4);
        const selectedList = list[listSelector];

        const itemSelector = Math.floor(Math.random() * selectedList.length);
        const selectedItem = selectedList[itemSelector];
        
        return selectedItem;
    }

    function mountPassword() {
        for (let i = 0; i < size; i++) {
            const item = getItem();
            password.push(item);
        }
    };

    mountPassword();

    const numbersAmount: string[] = password.filter((el: string) => numbers.includes(el));
    const specialCharactersAmount: string[] = password.filter((el: string) => specialCharacters.includes(el));

    while ((numbersAmount.length < minNumbers) || (specialCharactersAmount.length < minSpecialCharacters)) {
        return createRandomPass(size, minNumbers, minSpecialCharacters);
    }

    return { password: password.join(''), passwordArray: password };
}

export default createRandomPass;
