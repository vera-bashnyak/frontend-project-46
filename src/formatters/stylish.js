import _ from 'lodash';

const stylishFormatter = (diffs, replacer = ' ', spacesCount = 4, depth = 1)=> {
  const spacesWithChar = replacer.repeat(depth * spacesCount - 2);
  const spacesWithoutChar = replacer.repeat(depth * spacesCount);
  
  const formString = diffs.map((obj)=> {
    let str;
    let stringValue;
    let previousValue = obj['valueBefore'];
    let actualValue = obj['valueAfter'];

    if (obj['value'] instanceof Array) {
      stringValue = stylishFormatter(obj['value'], replacer, spacesCount, depth + 1);
    } else {
      stringValue = obj['value'];
    }

    if (!obj.hasOwnProperty('status')) {
      str = `${spacesWithoutChar}${obj['name']}: ${stringValue}`;
    }
    
    else if (obj['status'] === 'added') {
      str = `${spacesWithChar}+ ${obj['name']}: ${stringValue}`;
    }  
    
    else if (obj['status'] === 'deleted') {
      str = `${spacesWithChar}- ${obj['name']}: ${stringValue}`;
    } 
    
    else if (obj['status'] === 'not changed' || obj['status'] === 'object-changed') {
      str = `${spacesWithoutChar}${obj['name']}: ${stringValue}`;
    } 
    
    else if (obj['status'] === 'changed') {
      if (obj['valueBefore'] instanceof Array) {
        previousValue = stylishFormatter(obj['valueBefore'], replacer, spacesCount, depth + 1);
      }

      if (obj['valueAfter'] instanceof Array) {
        actualValue = stylishFormatter(obj['valueAfter'], replacer, spacesCount, depth + 1);
      }
      
      str = `${spacesWithChar}- ${obj['name']}: ${previousValue}`;
      str += `\n${spacesWithChar}+ ${obj['name']}: ${actualValue}`;
    }
    return str;
  }); 
  return `{\n${formString.join('\n')}\n${replacer.repeat(depth * spacesCount - 4)}}`;
};


export default stylishFormatter;