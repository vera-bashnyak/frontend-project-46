import path from 'path';
import { fileURLToPath } from 'url';
import expectedStylish from '../__fixtures__/expected-stylish.js';
import expectedPlain from '../__fixtures__/expected-plain.js';
import expectedJson from '../__fixtures__/expected-json.js';
import genDiff from '../index.js';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare json files', () => {
  const filepath1 = getFixturePath('file-nested1.json');
  const filepath2 = getFixturePath('file-nested2.json');

  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson);
});

test('compare yaml files', () => {
  const filepath1 = getFixturePath('file-nested1.yml');
  const filepath2 = getFixturePath('file-nested2.yml');

  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson);
});
