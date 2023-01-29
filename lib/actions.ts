import chalk from "chalk";
import { createRandomPass } from "./generate";
import { PasswordGenerator } from "./interface";
import { validateParams } from "./validation/check";

const log = console.log;
const { gray, bold } = chalk;

const getPassword = (passwordParams: PasswordGenerator) => {
    const generatedPassword = createRandomPass(passwordParams);
    log(`${gray('Generated Password:')} ${bold(generatedPassword)}`);
}

const getPasswordWithValidation = (passwordParams: PasswordGenerator) => {
    if (validateParams(passwordParams)) {
      const generatedPassword = createRandomPass(passwordParams);
      log(`${gray('Generated Password:')} ${bold(generatedPassword)}`);
    }
}

export {
    getPassword,
    getPasswordWithValidation
}
  
