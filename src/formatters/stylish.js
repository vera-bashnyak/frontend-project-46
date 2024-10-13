const stylishFormatter = (diffs, replacer = ' ', spacesCount = 4, depth = 1) => {
  const spacesWithChar = replacer.repeat(depth * spacesCount - 2);
  const spacesWithoutChar = replacer.repeat(depth * spacesCount);

  const formString = diffs.map((obj) => {
    let stringValue;
    let previousValue = obj.valueBefore;
    let actualValue = obj.valueAfter;

    if (obj.value instanceof Array) {
      stringValue = stylishFormatter(obj.value, replacer, spacesCount, depth + 1);
    } else {
      stringValue = obj.value;
    }

    if (!Object.prototype.hasOwnProperty.call(obj, 'status')) {
      return `${spacesWithoutChar}${obj.name}: ${stringValue}`;
    } 
    
    if (obj.status === 'added') {
      return `${spacesWithChar}+ ${obj['name']}: ${stringValue}`;
    }

    if (obj.status === 'deleted') {
      return `${spacesWithChar}- ${obj.name}: ${stringValue}`;
    } 
    
    if (obj.status === 'not changed' || obj.status === 'object-changed') {
      return `${spacesWithoutChar}${obj.name}: ${stringValue}`;
    }

    if (obj.status === 'changed') {
      if (obj.valueBefore instanceof Array) {
        previousValue = stylishFormatter(obj.valueBefore, replacer, spacesCount, depth + 1);
      }

      if (obj.valueAfter instanceof Array) {
        actualValue = stylishFormatter(obj.valueAfter, replacer, spacesCount, depth + 1);
      }

      return `${spacesWithChar}- ${obj.name}: ${previousValue}\n${spacesWithChar}+ ${obj.name}: ${actualValue}`;
    }
    return;
  });
  return `{\n${formString.join('\n')}\n${replacer.repeat(depth * spacesCount - 4)}}`;
};

export default stylishFormatter;
