import _ from 'lodash';
import parse from './parsers.js';
import formatName from '../formatters/index.js';

const genDiff = (filepath1, filepath2, formatName)=> {
  const [obj1, obj2] = parse(filepath1, filepath2);

  const findDiff = (obj1, obj2)=> {
    const resultObject = _.merge(_.cloneDeep(obj1), _.cloneDeep(obj2));
    const entries = Object.entries(resultObject);
    const sortedEntries = _.sortBy(entries, function (item) {
      return item[0];
    });

    const diffs = sortedEntries.flatMap((entry)=> {
      const [key, value] = entry;
      let obj = {};
      let resultValue;

      if (value instanceof Object) {
        if (!Object.hasOwn(obj1, key)) {
          return {name: key, status: 'added', value};
        } 
      
        else if (!Object.hasOwn(obj2, key)) {
          return {name: key, status: 'deleted', value};
        } 

        resultValue = findDiff(obj1[key] ?? {}, obj2[key] ?? {});

        if (
          Object.hasOwn(obj1, key) &&
        Object.hasOwn(obj2, key)
        ) {
          return {name: key, value: resultValue};
        } 
      }

      resultValue = value;
    
      if (!Object.hasOwn(obj1, key)) {
        obj = {name: key, status: 'added', value: resultValue};
      }  
    
      else if (!Object.hasOwn(obj2, key)) {
        obj = {name: key, status: 'deleted', value: resultValue};
      } 
    
      else if (
        Object.hasOwn(obj1, key) &&
      Object.hasOwn(obj2, key) &&
      value === obj1[key]
      ) {
        obj = {name: key, status: 'not changed', value: resultValue};
      } 
    
      else if (
        Object.hasOwn(obj1, key) &&
      Object.hasOwn(obj2, key) &&
      value !== obj1[key]
      ) {
        obj = {name: key, status: 'changed', valueBefore: obj1[key], valueAfter: resultValue};
      }
      return obj;
    });
    return diffs;
  };
  return formatName(findDiff(obj1, obj2));
};

export default genDiff;


