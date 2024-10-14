const values = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  }
  return typeof value === 'string'
    ? `'${value}'`
    : value;
};

const plainFormatter = (diffs, keyPath = '') => {
  const formString = diffs.flatMap((obj) => {
    if (obj.value instanceof Array) {
      if (obj.status === 'added') {
        return `Property '${keyPath}${obj.name}' was added with value: [complex value]`;
      }

      if (obj.status === 'deleted') {
        return `Property '${keyPath}${obj.name}' was removed`;
      }

      return plainFormatter(obj.value, `${keyPath}${obj.name}.`);
    }

    const stringValue = typeof obj.value === 'string' ? `'${obj.value}'` : obj.value;

    if (obj.status === 'added') {
      return `Property '${keyPath}${obj.name}' was added with value: ${stringValue}`;
    }

    if (obj.status === 'deleted') {
      return `Property '${keyPath}${obj.name}' was removed`;
    }

    if (obj.status === 'changed') {
      return `Property '${keyPath}${obj.name}' was updated. `
      + `From ${values(obj.valueBefore)} to ${values(obj.valueAfter)}`;
    }
    throw new Error('Something went wrong');
  });

  const filtered = formString.filter((str) => typeof str !== 'undefined');
  return `${filtered.join('\n')}`;
};

export default plainFormatter;
