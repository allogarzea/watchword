import createRandomPass from ".";
import { PasswordGenerator } from "./interface";
import { numbers, specialCharacters } from "./values";

const testPassword = () => {
    for (let i = 0; i < 25; i++) {
        const size = Math.floor(Math.random() * 15);
        const minNumbers = Math.floor(Math.random() * size);
        const minSpecialCharacters = Math.floor(Math.random() * (size - minNumbers));
        
        const passwordParams: PasswordGenerator = {
            size: size,
            minNumbers: minNumbers,
            minSpecialCharacters: minSpecialCharacters
        }

        const primitivePassword = createRandomPass(size, minNumbers, minSpecialCharacters);

        const numbersAmount: string[] = primitivePassword.passwordArray.filter((el: string) => numbers.includes(el));
        const specialCharactersAmount: string[] = primitivePassword.passwordArray.filter((el: string) => specialCharacters.includes(el));

        if ((numbersAmount.length >= minNumbers) && (specialCharactersAmount.length >= minSpecialCharacters)) {
            console.log(i + 1, 'SUCCESS');
        } else {
            console.log(i + 1, 'ERROR');
            console.log(primitivePassword.password, size, minNumbers, minSpecialCharacters);
        }
    }
}

testPassword();