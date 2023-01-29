import chalk from "chalk";
import { validateParams } from "./validation/check";
import { PasswordGenerator } from "./interface";
import { upperAlphabet, lowerAlphabet, numbers, specialCharacters } from "./values";

const log = console.log;

const createRandomPass: Function = ({length, minNumbers, minSpecialCharacters}: PasswordGenerator) => {
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
    };

    function mountPassword() {
        for (let i = 0; i < length; i++) {
            const item = getItem();
            passwordArray.push(item);
        }
    };

    mountPassword();

    if ((numbersAmount < minNumbers) || (specialCharactersAmount < minSpecialCharacters)) {
        return createRandomPass({length, minNumbers, minSpecialCharacters});
    }

    return passwordArray.join('');
}

const getPassword = (passwordParams: PasswordGenerator) => {
  if (validateParams(passwordParams)) {
    const generatedPassword = createRandomPass(passwordParams);
    log(chalk.bold(generatedPassword));
  }
}

export {createRandomPass, getPassword};
