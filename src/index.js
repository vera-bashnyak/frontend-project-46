import parse from './parsers.js';
import findDiff from './find-diff.js';
import formatName from './formatters/index.js';

const genDiff = (filepath1, filepath2, name) => {
  const [obj1, obj2] = parse(filepath1, filepath2);
  const formatter = formatName(name);
  const diff = formatter(findDiff(obj1, obj2));
  return diff;
};

export default genDiff;
