# project-gendiff
### Hexlet tests and linter status: 
[![Actions Status](https://github.com/vera-bashnyak/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/vera-bashnyak/frontend-project-46/actions)
<a href="https://codeclimate.com/github/vera-bashnyak/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/9aaa25a7b471339aa356/maintainability" /></a>
<a href="https://codeclimate.com/github/vera-bashnyak/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/9aaa25a7b471339aa356/test_coverage" /></a>
The program compares two configuration files and shows the difference in different formats.
## Installation
```
$git clone git@github.com:vera-bashnyak/frontend-project-46.git
```
```
$npm ci
```
```
$sudo npm link
```
## Usage examples
```
gendiff -h

  Usage: gendiff [options] <filepath1> <filepath2>

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -f, --format [type]  output format
    -h, --help           output usage information
```
[![asciicast](https://asciinema.org/a/674371.svg)](https://asciinema.org/a/674371)
[![asciicast](https://asciinema.org/a/675284.svg)](https://asciinema.org/a/675284)
## Stylish format
[![asciicast](https://asciinema.org/a/676801.svg)](https://asciinema.org/a/676801)
## Plain format
[![asciicast](https://asciinema.org/a/677369.svg)](https://asciinema.org/a/677369)
## JSON format
[![asciicast](https://asciinema.org/a/679122.svg)](https://asciinema.org/a/679122)
