import _ from 'lodash';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const [obj1, obj2] = parse(filepath1, filepath2);
  const resultObject = Object.assign(_.cloneDeep(obj1), _.cloneDeep(obj2));
  const entries = Object.entries(resultObject);
  const sortedEntries = _.sortBy(entries, function (item) {
    return item[0];
  });

  const formString = sortedEntries.reduce((str, entry) => {
    const [key, value] = entry;
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && value === obj1[key]) {
      str = `${str}    ${key}: ${value}\n`;
    } else if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && value !== obj1[key]) {
      str = `${str}  - ${key}: ${obj1[key]}\n  + ${key}: ${value}\n`;
    } else if (!Object.hasOwn(obj1, key)) {
      str = `${str}  + ${key}: ${value}\n`;
    } else {
      str = `${str}  - ${key}: ${value}\n`;
    }
    return str;
  }, '{\n');

  return `${formString}}`;
};

export default genDiff;