import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';
import jsonFormatter from './json.js';

const formatName = (name)=> {
  const formatters = {
    stylish: stylishFormatter,
    plain: plainFormatter,
    json: jsonFormatter,
  };
  return formatters[name] ?? stylishFormatter;
};

export default formatName;