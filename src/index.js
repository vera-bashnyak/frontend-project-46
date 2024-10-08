import parse from './parsers.js';
import formatName from './formatters/index.js';
import findDiff from './find-diff.js';

const genDiff = (filepath1, filepath2, format)=> {
  const [obj1, obj2] = parse(filepath1, filepath2);
  const formatter = formatName(format);
  return formatter(findDiff(obj1, obj2));
};

export default genDiff;


