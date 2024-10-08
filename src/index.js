import parse from './parsers.js';
import findDiff from './find-diff.js';

const genDiff = (filepath1, filepath2, formatName)=> {
  const [obj1, obj2] = parse(filepath1, filepath2);
  return formatName(findDiff(obj1, obj2));
};

export default genDiff;


