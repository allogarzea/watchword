# Watchword
###### par gaztea

Command-Line Password Generator in TypeScript.

## Installation
While it's not available in npm. You need to clone our repo to install **watchword**.
```sh
git clone https://github.com/allogaztea/watchword.git
```
Then, you'll need to access the folder and build the application. To do it, run:
```sh
cd watchword && npm run build
```
Finally, to install the package, run:
```sh
sudo npm install -g ./
```

### Quick Start

You can use the default ``watchword`` command without any additional argument. By running it, you'll get a 15 digits password with, at least, 5 numbers and 5 special characters. 
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
- Linux (xclip supporting systems) should be installed [xclip](https://github.com/astrand/xclip)

## Issues
You can ask for new features, improvementes and bug fixes in our [issues tab](https://github.com/allogaztea/watchword/issues)

You can also check the status of our current issues in our [kanban board](https://github.com/users/allogaztea/projects/1).
