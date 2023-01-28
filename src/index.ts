import { upperAlphabet, lowerAlphabet, numbers, specialCharacters, defaultPasswordParams } from "./values";
import { argv } from 'node:process';
import { PasswordGenerator } from "./interface";
import chalk from "chalk";

const log = console.log;

const userPasswordParams = {
	size: argv[2],
	minNumbers: argv[3],
	minSpecialCharacters: argv[4]
};

const createRandomPass: Function = ({size, minNumbers, minSpecialCharacters}: PasswordGenerator) => {
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
  ;
    function mountPassword() {
        for (let i = 0; i < size; i++) {
            const item = getItem();
            passwordArray.push(item);
        }
    };

    mountPassword();

    if ((numbersAmount < minNumbers) || (specialCharactersAmount < minSpecialCharacters)) {
        return createRandomPass({size, minNumbers, minSpecialCharacters});
    }

    return { password: passwordArray.join(''), passwordArray: passwordArray };
}

const generatedPassword = createRandomPass(argv.length > 2 ?  userPasswordParams : defaultPasswordParams).password;

log(chalk.bold(generatedPassword));

export default createRandomPass;
