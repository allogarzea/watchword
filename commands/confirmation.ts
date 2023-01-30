#!/usr/bin/env node
import * as inquirer from 'inquirer'
import { getPassword } from '../lib/actions'
import { type PasswordParameters } from '../lib/interface'

const prompt = inquirer.createPromptModule()

const confirmationQuestion = (passwordParams: PasswordParameters): void => {
  void prompt({
    type: 'confirm', name: 'confirmation', message: 'Do you want to continue: '
  }).then((answer) => {
    if (answer.confirmation === true) {
      getPassword(passwordParams)
    }
  })
}

export default confirmationQuestion
