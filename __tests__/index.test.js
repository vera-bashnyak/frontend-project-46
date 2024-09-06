import path from 'path';
import { fileURLToPath } from 'url';
import expectedOutput from '../__fixtures__/expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2)).toEqual(expectedOutput);
});