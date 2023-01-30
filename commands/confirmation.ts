#!/usr/bin/env node
import * as inquirer from 'inquirer';
import { getPassword } from "../lib/actions";
import { PasswordGenerator } from '../lib/interface';

const prompt = inquirer.createPromptModule();

const confirmationQuestion = (passwordParams: PasswordGenerator) => {
    prompt({
        type: 'confirm', name: 'confirmation', message: 'Do you want to continue: '
    }).then((answer) => {
        if (answer.confirmation) {
            getPassword(passwordParams);
        }
    })
}

export default confirmationQuestion;

