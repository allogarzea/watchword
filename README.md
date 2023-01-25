# Watchword
###### by gaztea

Command-Line Password Generator in TypeScript.

## Basic Commands

### Get Random Password

You can use the default ``npm start`` command without any additional argument. By running it, you'll get a 15 digits password with, at least, 5 numbers and 5 special characters.

    npm start

You can also add arguments to create a custom password:

    npm start [password_size] [minimum_amount_numbers] [minimum_amount_special_characters]


### Help

Basic instruction of the Watchword


    npm run watchword-help


### Tests

Basic set of tests, aimed at the exclusive use of tool developers:

    npm test


## Features
- [x] Create a random password.
- [x] Able to use custom options provided as arguments in CLI.


## To do
- [ ] Add a complete set of tests to improve quality assurance.
- [ ] Improve code readability and performance.
- [ ] Browser extension

Once the basic functions are working at an acceptable level, part of the code will be translated to Kotlin and a new repository will be added. The browser extension will continue to be in Typescript while the CLI will be in Kotlin.
