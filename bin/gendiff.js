#!/usr/bin/env node
import { program } from 'commander';
import { genDiff } from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  })

program.parse();

export default program;


const numbers = () => {
	for (let i = 0; i <= 1000; i += 1) {
    if (i % 3 !== 0) {
      continue;
    }
	  if (i % 5 === 0) {
     continue;
    }
    const sum = i.toString()
      .split('')
      .map(Number)
      .reduce(function (a, b) {
          return a + b;
      }, 0);
    if (sum >= 10) {
      continue;
    }
	  console.log(i);
  }
}
					