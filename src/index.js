import _ from 'lodash';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const [obj1, obj2] = parse(filepath1, filepath2);
  const resultObject = _.merge(_.cloneDeep(obj1), _.cloneDeep(obj2));
  const diff = stylish(obj1, obj2, resultObject);
  return diff;
};

const stylish = (obj1, obj2, result, replacer = ' ', spacesCount = 4, depth = 1) => {
  console.log(obj2);
  const entries = Object.entries(result);
  const sortedEntries = _.sortBy(entries, function (item) {
    return item[0];
  });
  const spaces = replacer.repeat(depth * spacesCount - 2);

  const formString = sortedEntries.map((entry) => {
  const [key, value] = entry;
  let str;
  let stringValue;

  if (value instanceof Object) {
    stringValue = stylish(obj1[key], obj2[key], value, replacer = ' ', spacesCount, depth + 1);
  } else {
    stringValue = value;
  }

  if (typeof obj1 === 'undefined' || typeof obj2 === 'undefined') {
    str = `${replacer.repeat(depth * spacesCount)}${key}: ${stringValue}`;
  } else if (!Object.hasOwn(obj1, key)) {
    str = `${spaces}+ ${key}: ${stringValue}`;
  }  else if (!Object.hasOwn(obj2, key)) {
    str = `${spaces}- ${key}: ${stringValue}`;
  } else if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && value === obj1[key]) {
    str = `${replacer.repeat(depth * spacesCount)}${key}: ${stringValue}`;
  } else if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && value !== obj1[key]) {
    str = `${spaces}- ${key}: ${obj1[key]}\n${spaces}+ ${key}: ${stringValue}`;
  } 
  return str;
});

return `{\n${formString.join('\n')}\n${replacer.repeat(spaces)}}`;
};

export default genDiff;


