import fs from 'fs';
import _ from 'lodash';
import path from 'path';

const parse = (filepath1, filepath2) => {
const filepaths = [filepath1, filepath2];
const objects = filepaths.map(filepath => {
  const extension = filepath.substring(filepath.lastIndexOf('.') + 1);
  const file = fs.readFileSync(path.resolve(filepath));
  let obj;
  if (extension === 'json') {
    obj = JSON.parse(file);
  }
  return obj;
})
return objects;
};


const genDiff = (filepath1, filepath2) => {
  const [obj1, obj2] = parse(filepath1, filepath2);
  const resultObject = Object.assign(_.cloneDeep(obj1), _.cloneDeep(obj2));
  const entries = Object.entries(resultObject);
  const sortedEntries = _.sortBy(entries, function (item) {
    return item[0];
  });

  const formString = sortedEntries.reduce((str, entry) => {
    console.log(entry);
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