import path from 'path';
import { fileURLToPath } from 'url';
import expectedOutput from '../__fixtures__/expected.js';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare json files', () => {
    const filepath1 = getFixturePath('file-nested1.json');
    const filepath2 = getFixturePath('file-nested2.json');

    expect(genDiff(filepath1, filepath2)).toEqual(expectedOutput);
});

test('compare yaml files', () => {
    const filepath1 = getFixturePath('file-nested1.yml');
    const filepath2 = getFixturePath('file-nested2.yml');

    expect(genDiff(filepath1, filepath2)).toEqual(expectedOutput);
});