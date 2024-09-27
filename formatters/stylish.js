/* import _ from 'lodash';

const stylishFormatter = (obj1, obj2, result, replacer = ' ', spacesCount = 4, depth = 1) => {
    const entries = Object.entries(result);
    const sortedEntries = _.sortBy(entries, function (item) {
      return item[0];
    });
    const spacesWithChar = replacer.repeat(depth * spacesCount - 2);
    const spacesWithoutChar = replacer.repeat(depth * spacesCount);
  
    const formString = sortedEntries.map((entry) => {
    const [key, value] = entry;
    let str;
    let stringValue;

    if (value instanceof Object) {
      stringValue = stylish(obj1[key] ?? {}, obj2[key] ?? {}, value, replacer, spacesCount, depth + 1);
    } else {
      stringValue = value;
    }
  
    if (Object.keys(obj1).length === 0 || Object.keys(obj2).length === 0) {
      str = `${spacesWithoutChar}${key}: ${stringValue}`;
    } 
    
    else if (!Object.hasOwn(obj1, key)) {
      str = `${spacesWithChar}+ ${key}: ${stringValue}`;
    }  
    
    else if (!Object.hasOwn(obj2, key)) {
      str = `${spacesWithChar}- ${key}: ${stringValue}`;
    } 
    
    else if (
      Object.hasOwn(obj1, key) &&
      Object.hasOwn(obj2, key) &&
      value instanceof Object ||
      value === obj1[key]
    ) {
      str = `${spacesWithoutChar}${key}: ${stringValue}`;
    } 
    
    else if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && value !== obj1[key]) {
      if (obj1[key] instanceof Object) {
        const objectValue = stylish({}, {}, obj1[key], replacer, spacesCount, depth + 1);
        str = `${spacesWithChar}- ${key}: ${objectValue}\n${spacesWithChar}+ ${key}: ${stringValue}`;
      } else {
        str = `${spacesWithChar}- ${key}: ${obj1[key]}\n${spacesWithChar}+ ${key}: ${stringValue}`;
      }
    } 
    return str;
  });
  
  return `{\n${formString.join('\n')}\n${replacer.repeat(depth * spacesCount - 4)}}`;
  };

  export default stylishFormatter;
*/