import chalk from 'chalk'
import { clipboard } from 'clipboard-sys'
import { createRandomPass } from './generate'
import { type PasswordParameters } from './interface'
import { validateParams } from './validation/check'

const log = console.log
const { gray, bold } = chalk

const copyPassword = async (password: string): Promise<any> => {
  await clipboard.writeText(password)
  log(gray('Your password was copied to clipboard'))
}

const getPassword = async (passwordParams: PasswordParameters): Promise<any> => {
  const generatedPassword = createRandomPass(passwordParams)
  log(`${gray('Generated Password:')} ${bold(generatedPassword)}`)
  await copyPassword(generatedPassword)
}

const getPasswordWithValidation = async (passwordParams: PasswordParameters): Promise<any> => {
  const validation = validateParams(passwordParams)
  if (validation) {
    const generatedPassword = createRandomPass(passwordParams)
    log(`${gray('Generated Password:')} ${bold(generatedPassword)}`)
    await copyPassword(generatedPassword)
  } else {
    log('Error')
  }
}

export {
  getPassword,
  getPasswordWithValidation
}
