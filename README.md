# Watchword

###### par gaztea

Introducing a versatile TypeScript library that allows you to conveniently **generate secure passwords and create unique usernames** directly from the command-line interface. This comprehensive solution offers robust features for password management and user identification, ensuring a seamless experience.

By using **Watchword**, you can effortlessly generate strong, random passwords tailored to your desired level of complexity and security. Additionally, it enables you to create unique usernames based on customizable patterns, making user identification easier and more efficient. Customization options are available to meet your specific requirements. You can specify the type of password you need, such as alphanumeric, numeric, or special character-based.

## Installation

### npm

```sh
npm install -g watchword
```

### Releases

To install through via github releases, you'll need to install the dependencies. To do it, access the downloaded folder and run:

```sh
npm install
```

Finally, to install the package, run:

```sh
sudo npm install -g ./
```

## Quick Start

You can use the default `watchword` command without any additional argument. By running it, you'll get a 15 digits password with, at least, 5 numbers and 5 special characters.

```sh
watchword
```

You can also add arguments to create a custom password:

```sh
watchword -l 30 -n 10 -s 10
```

To get the basic instructions, run:

```sh
watchword --help
```

All Options:

    -V, --version           output the version number
    -l, --length, <value>   set the password length (default: 15)
    -n, --numbers <value>   set the minimum amount of numbers in the password (default: 5)
    -s, --special <value>   set the minimum amount of special characters in the password (default: 5)
    -h, --help              display help for command

## Clipboard

We use [clipboard-sys](https://github.com/udarrr/clipboard-sys) to auto copy the generated password to your clipboard. It's cross plataform and supports:

- MacOS
- Windows
- Linux ([xclip](https://github.com/astrand/xclip) supporting systems)

## Issues

You can ask for new features, improvements and bug fixes in our [issues tab](https://github.com/allogaztea/watchword/issues)

You can also check the status of our current issues in our [kanban board](https://github.com/users/allogaztea/projects/1).
