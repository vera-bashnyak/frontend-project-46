const stylishFormatter = (diffs, replacer = ' ', spacesCount = 4, depth = 1) => {
  const spacesWithChar = replacer.repeat(depth * spacesCount - 2);
  const spacesWithoutChar = replacer.repeat(depth * spacesCount);

  const formString = diffs.map((obj) => {
    const stringValue = (obj.value instanceof Array)
      ? stylishFormatter(obj.value, replacer, spacesCount, depth + 1)
      : obj.value;

    if (!Object.prototype.hasOwnProperty.call(obj, 'status')) {
      return `${spacesWithoutChar}${obj.name}: ${stringValue}`;
    }

    if (obj.status === 'added') {
      return `${spacesWithChar}+ ${obj.name}: ${stringValue}`;
    }

    if (obj.status === 'deleted') {
      return `${spacesWithChar}- ${obj.name}: ${stringValue}`;
    }

    if (obj.status === 'not changed' || obj.status === 'object-changed') {
      return `${spacesWithoutChar}${obj.name}: ${stringValue}`;
    }

    if (obj.status === 'changed') {
      const previousValue = (obj.valueBefore instanceof Array)
        ? stylishFormatter(obj.valueBefore, replacer, spacesCount, depth + 1)
        : obj.valueBefore;

      const actualValue = (obj.valueAfter instanceof Array)
        ? stylishFormatter(obj.valueAfter, replacer, spacesCount, depth + 1)
        : obj.valueAfter;

      return `${spacesWithChar}- ${obj.name}: ${previousValue}\n${spacesWithChar}+ ${obj.name}: ${actualValue}`;
    }
    throw new Error('Something went wrong');
  });
  return `{\n${formString.join('\n')}\n${replacer.repeat(depth * spacesCount - 4)}}`;
};

export default stylishFormatter;
