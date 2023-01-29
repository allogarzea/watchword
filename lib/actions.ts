import chalk from 'chalk'
import { clipboard } from 'clipboard-sys'
import { createRandomPass } from './generate'
import { type PasswordParameters } from './interface'
import { validateParams } from './validation/check'

const log = console.log
const { gray, bold } = chalk

const copyPassword = (password: string): any => {
  void clipboard.writeText(password)
  log(gray('Your password was copied to clipboard'))
}

const getPassword = (passwordParams: PasswordParameters): any => {
  const generatedPassword = createRandomPass(passwordParams)
  log(`${gray('Generated Password:')} ${bold(generatedPassword)}`)
  copyPassword(generatedPassword)
}

const getPasswordWithValidation = (passwordParams: PasswordParameters): any => {
  const validation: boolean = validateParams(passwordParams)
  if (validation) {
    const generatedPassword = createRandomPass(passwordParams)
    log(`${gray('Generated Password:')} ${bold(generatedPassword)}`)
    copyPassword(generatedPassword)
  }
}

export {
  getPassword,
  getPasswordWithValidation
}
