import stylish from './stylish.js';
import plain from './plain.js';

const formatName = (name) => {
    if (name === 'stylish') {
        return stylish;
    } else if (name === 'plain') {
        return plain;
    }
};

export default formatName;