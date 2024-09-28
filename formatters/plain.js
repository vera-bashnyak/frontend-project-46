import _ from 'lodash';

const plainFormatter = (obj1, obj2, result, pathToKey = '') => {
    const entries = Object.entries(result);
    const sortedEntries = _.sortBy(entries, function (item) {
      return item[0];
    });

    const formString = sortedEntries.flatMap((entry) => {
    const [key, value] = entry;
    let str;
    let stringValue;

    if (value instanceof Object) {
      if (!Object.hasOwn(obj1, key)) {
        return str = `Property '${pathToKey}${key}' was added with value: [complex value]`;
      } 
      
      if (!Object.hasOwn(obj2, key)) {
        return str = `Property '${pathToKey}${key}' was removed`;
      }
      else {
      return plain(obj1[key] ?? {}, obj2[key] ?? {}, value, `${pathToKey}${key}.`);
        } 
    } else {
      stringValue = typeof value === 'string' ? `'${value}'` : value;
    }
    
    if (!Object.hasOwn(obj1, key)) {
      str = `Property '${pathToKey}${key}' was added with value: ${stringValue}`;
    } 
    
    if (!Object.hasOwn(obj2, key)) {
      str = `Property '${pathToKey}${key}' was removed`;
    } 

     else if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && value !== obj1[key]) {
      if (obj1[key] instanceof Object) {
        obj1[key] = '[complex value]';
      } else {
      obj1[key] = typeof value === 'string' ? `'${obj1[key]}'` : obj1[key];
      }
      str = `Property '${pathToKey}${key}' was updated. From ${obj1[key]} to ${stringValue}`;
    } 
    return str;
  });

  const filtered = formString.filter((str) => typeof str !== 'undefined');
  return `${filtered.join('\n')}`;
  };

  export default plainFormatter;