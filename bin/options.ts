#!/usr/bin/env node
import * as commander from 'commander';
import { getPassword } from '../lib/index';

const bootstrap = () => {
  const { Command, Option } = commander;
  const program = new Command();

  program
    .name('watchword')
    .description('Command Line Password Generator in TypeScript')
    .version('0.1');
  
  program
    .addOption(new Option('-l, --length, <value>', 'Set the password length').default(15))
    .addOption(new Option('-n, --numbers, <value>', 'Set the minimum amount of numbers in the password').default(5))
    .addOption(new Option('-s, --special, <value>', 'Set the minimum amount of special characters in the password').default(5))
    .action(() => {
      const options = program.opts();
      const passwordParams = {
        length: options.length,
        minNumbers: options.numbers,
        minSpecialCharacters: options.special
      }
      getPassword(passwordParams);
    });
  
  program.parse(process.argv);
};

bootstrap();