import _ from 'lodash';

const findDiff = (obj1, obj2) => {
  const resultObject = _.merge(_.cloneDeep(obj1), _.cloneDeep(obj2));
  const entries = Object.entries(resultObject);
  const sortedEntries = _.sortBy(entries, (item) => item[0]);

  const diffs = sortedEntries.flatMap((entry) => {
    const [key, value] = entry;
    const resultValue = (value instanceof Object)
      ? findDiff(obj1[key] ?? {}, obj2[key] ?? {})
      : value;

    const previousValue = (obj1[key] instanceof Object)
      ? findDiff(obj1[key], {})
      : obj1[key];

    if (value instanceof Object) {
      if (obj1[key] instanceof Object
        && JSON.stringify(value) !== JSON.stringify(obj1[key])) {
        return { name: key, status: 'object-changed', value: resultValue };
      }
    }

    if (Object.keys(obj2).length === 0 || Object.keys(obj1).length === 0) {
      return { name: key, value: resultValue };
    }

    if (!Object.hasOwn(obj1, key)) {
      return { name: key, status: 'added', value: resultValue };
    }

    if (!Object.hasOwn(obj2, key)) {
      return { name: key, status: 'deleted', value: resultValue };
    }

    if (
      Object.hasOwn(obj1, key)
      && Object.hasOwn(obj2, key)
      && JSON.stringify(value) === JSON.stringify(obj1[key])
    ) {
      return { name: key, status: 'not changed', value: resultValue };
    }

    if (
      Object.hasOwn(obj1, key)
      && Object.hasOwn(obj2, key)
      && JSON.stringify(value) !== JSON.stringify(obj1[key])
    ) {
      return {
        name: key, status: 'changed', valueBefore: previousValue, valueAfter: resultValue,
      };
    }
    throw new Error('Something went wrong');
  });
  return diffs;
};

export default findDiff;
