import * as commander from 'commander'
import packageJSON from '../package.json'
import { getPasswordWithValidation } from '../lib/actions'
import { recommendedValues } from '../lib/constants'

const { Command, Option } = commander
const program = new Command()

const bootstrap = (): void => {
  program
    .name('watchword')
    .description('Command Line Password Generator in TypeScript')
    .version(packageJSON.version)

  program
    .addOption(new Option('-l, --length <value>', 'set the password length')
      .default(recommendedValues.length.default))
    .addOption(new Option('-n, --numbers <value>', 'set the minimum amount of numbers in the password')
      .default(recommendedValues.numbers.default))
    .addOption(new Option('-s, --special <value>', 'set the minimum amount of special characters in the password')
      .default(recommendedValues.specialCharacters.default))
    .action(() => {
      const options = program.opts()
      const passwordParams = {
        length: options.length,
        minNumbers: options.numbers,
        minSpecialCharacters: options.special
      }

      getPasswordWithValidation(passwordParams)
    })

  program.parse(process.argv)
}

export default bootstrap
