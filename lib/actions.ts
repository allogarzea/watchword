import chalk from "chalk";
import { createRandomPass } from "./generate";
import { PasswordGenerator } from "./interface";
import { validateParams } from "./validation/check";

const log = console.log;

const getPassword = (passwordParams: PasswordGenerator) => {
    const generatedPassword = createRandomPass(passwordParams);
    log(chalk.bold(generatedPassword));
}

const getPasswordWithValidation = (passwordParams: PasswordGenerator) => {
    if (validateParams(passwordParams)) {
      const generatedPassword = createRandomPass(passwordParams);
      log(chalk.bold(generatedPassword));
    }
}

export {
    getPassword,
    getPasswordWithValidation
}
  
