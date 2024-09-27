import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';
import jsonFormatter from './json.js';

const formatName = (name) => {
    if (name === 'stylish') {
        return stylishFormatter;
    } else if (name === 'plain') {
        return plainFormatter;
    } else if (name === 'json')
        return jsonFormatter;
};

export default formatName;