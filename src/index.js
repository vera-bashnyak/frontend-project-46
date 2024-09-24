import _ from 'lodash';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2, formatName) => {
  const [obj1, obj2] = parse(filepath1, filepath2);
  const resultObject = _.merge(_.cloneDeep(obj1), _.cloneDeep(obj2));
  return formatName(obj1, obj2, resultObject);
}

export default genDiff;


