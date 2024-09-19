import _ from 'lodash';
import parse from './parsers.js';
import stylish from '../formatters/stylish.js';

const genDiff = (filepath1, filepath2, formatter) => {
  const [obj1, obj2] = parse(filepath1, filepath2);
  const resultObject = _.merge(_.cloneDeep(obj1), _.cloneDeep(obj2));
  if (formatter === 'stylish') {
 return stylish(obj1, obj2, resultObject);
};
}

export default genDiff;


