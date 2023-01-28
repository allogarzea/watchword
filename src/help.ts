import chalk from 'chalk';
const log = console.log;

log(`Hey there! Welcome to ${chalk.bold('Watchword')}

Usage:

npm start                                       create a password with default parameters 
npm start ${chalk.bold('size numbers specialCharacters')}        create a password with custom parameters

Default parameters: 

- 15 digits, 
- 5 numbers, 
- 5 special characters

Examples:

command: npm start
output: ${chalk.bold('l^U?4;h26;^2w1Q')}

command: npm start 10 5 3
output: ${chalk.bold('80$K?573*9')}

`);

