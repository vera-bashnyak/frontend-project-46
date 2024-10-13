const plainFormatter = (diffs, keyPath = '')=> {
  const formString = diffs.flatMap((obj) => {
    let stringValue;
    let previousValue;
    let actualValue = obj.valueAfter;

    if (obj.value instanceof Array) {
      if (obj.status === 'added') {
        return `Property '${keyPath}${obj.name}' was added with value: [complex value]`;
      } 
      
      if (obj.status === 'deleted') {
        return `Property '${keyPath}${obj.name}' was removed`;
      }

      return plainFormatter(obj.value, `${keyPath}${obj.name}.`);
    } 
    else {
      stringValue = typeof obj.value === 'string' ? `'${obj.value}'` : obj.value;
    }
  
    if (obj.status === 'added') {
      return `Property '${keyPath}${obj.name}' was added with value: ${stringValue}`;
    } 
    
    if (obj.status === 'deleted') {
      return `Property '${keyPath}${obj.name}' was removed`;
    } 

    else if (obj.status === 'changed') {
      if (obj.valueBefore instanceof Object) {
        previousValue = '[complex value]';
      } else {
        previousValue = typeof obj.valueBefore
        === 'string' ? `'${obj.valueBefore}'` : obj.valueBefore;
      }

      if (obj.valueAfter instanceof Object) {
        actualValue = '[complex value]';
      } else {
        actualValue = typeof obj.valueAfter
        === 'string' ? `'${obj.valueAfter}'` : obj.valueAfter;
      }
      return `Property '${keyPath}${obj.name}' was updated. From ${previousValue} to ${actualValue}`;
    } 
  });

  const filtered = formString.filter((str)=> typeof str !== 'undefined');
  return `${filtered.join('\n')}`;
};

export default plainFormatter;