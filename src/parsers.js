import fs from 'fs';
import path from 'path';
import YAML from 'yaml'; 

const parse = (filepath1, filepath2) => {
    const filepaths = [filepath1, filepath2];
    const objects = filepaths.map(filepath => {
      const extension = path.extname(filepath);
      let obj;
      if (extension === '.json') {
        const file = fs.readFileSync(path.resolve(filepath));
        obj = JSON.parse(file);
      }
      if (extension === '.yaml' || extension === '.yml') {
        const file = fs.readFileSync(path.resolve(filepath), 'utf8');
        obj = YAML.parse(file);
      }
      return obj;
    })
    return objects;
    };

export default parse;