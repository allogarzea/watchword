#!/usr/bin/env node
import * as commander from 'commander';
import { getPassword } from '../lib/index';

const bootstrap = () => {
  const { Command, Option } = commander;
  const program = new commander.Command();

  program
    .name('watchword')
    .description('A command line password generator in TypeScript')
    .version('0.0.1');
  
  program
    .addOption(new Option('-l, --length, <type>', 'set the password length').default(15))
    .addOption(new Option('-n, --numbers, <type>', 'set the password length').default(5))
    .addOption(new Option('-s, --special, <type>', 'display some debugging').default(5))
    .action(() => {
      const options = program.opts();
      getPassword(options.length, options.numbers, options.special)
    });
  
  program.parse(process.argv);
};

bootstrap();