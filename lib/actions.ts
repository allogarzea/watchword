import chalk from "chalk";
import { clipboard } from "clipboard-sys";
import { createRandomPass } from "./generate";
import { PasswordGenerator } from "./interface";
import { validateParams } from "./validation/check";

const log = console.log;
const { gray, bold } = chalk;

const copyPassword = (password: string) => {
    clipboard.writeText(password);
    log(gray('Your password was copied to clipboard'));
}

const getPassword = (passwordParams: PasswordGenerator) => {
    const generatedPassword = createRandomPass(passwordParams);
    log(`${gray('Generated Password:')} ${bold(generatedPassword)}`);
    copyPassword(generatedPassword);
}

const getPasswordWithValidation = (passwordParams: PasswordGenerator) => {
    if (validateParams(passwordParams)) {
      const generatedPassword = createRandomPass(passwordParams);
      log(`${gray('Generated Password:')} ${bold(generatedPassword)}`);
      copyPassword(generatedPassword);
    }
}

export {
    getPassword,
    getPasswordWithValidation
}
  
