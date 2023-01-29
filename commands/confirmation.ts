#!/usr/bin/env node
import chalk from "chalk";
import * as inquirer from 'inquirer';
import { createRandomPass } from '../lib';
import { PasswordGenerator } from '../lib/interface';

const prompt = inquirer.createPromptModule();
const log = console.log;

const confirmationQuestion = (passwordParams: PasswordGenerator) => {
    prompt({
        type: 'confirm', name: 'confirmation', message: 'Do you want to continue: '
    }).then((answer) => {
        if (answer.confirmation) {
            const generatedPassword = createRandomPass(passwordParams);
            log(`Generated Password: ${chalk.bold(generatedPassword)}`);
        }
    })
}

export default confirmationQuestion;

