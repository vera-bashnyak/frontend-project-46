import _ from 'lodash';

const stylishFormatter = (diffs, replacer = ' ', spacesCount = 4, depth = 1)=> {
  const spacesWithChar = replacer.repeat(depth * spacesCount - 2);
  const spacesWithoutChar = replacer.repeat(depth * spacesCount);
  
  const formString = diffs.map((obj)=> {
    let str;
    let stringValue;

    if (obj['value'] instanceof Array) {
      stringValue = stylishFormatter(obj['value'], replacer, spacesCount, depth + 1);
    } else {
      stringValue = obj['value'];
    }

    if (obj['status'] === 'undefined') {
      str = `${spacesWithoutChar}${obj['name']}: ${stringValue}`;
    }
    
    if (obj['status'] === 'added') {
      str = `${spacesWithChar}+ ${obj['name']}: ${stringValue}`;
    }  
    
    else if (obj['status'] === 'deleted') {
      str = `${spacesWithChar}- ${obj['name']}: ${stringValue}`;
    } 
    
    else if (obj['status'] === 'not changed') {
      str = `${spacesWithoutChar}${obj['name']}: ${stringValue}`;
    } 
    
    else if (obj['status'] === 'changed') {
      str = `${spacesWithChar}- ${obj['name']}: ${obj['valueBefore']}`;
      str += `\n${spacesWithChar}+ ${obj['name']}: ${obj['valueAfter']}`;
    }
    return str;
  }); 
  return `{\n${formString.join('\n')}\n${replacer.repeat(depth * spacesCount - 4)}}`;
};


export default stylishFormatter;