#!/usr/bin/env node
import * as inquirer from 'inquirer'
import { getPassword } from '../lib/actions'
import { type PasswordParameters } from '../lib/interface'

const prompt = inquirer.createPromptModule()

const confirmationQuestion = async (passwordParams: PasswordParameters): Promise<any> => {
  await prompt({
    type: 'confirm', name: 'confirmation', message: 'Do you want to continue: '
  }).then((answer) => {
    if (answer.confirmation === true) {
      void getPassword(passwordParams)
    }
  })
}

export default confirmationQuestion
