import dictionary from './dataset/dictionary.js';
import commonWords from './dataset/commonWords.js';
import fs from 'fs';

let result = Object.keys(dictionary).map(key => ({[key]: dictionary[key]}));

const filter = result.filter(item => {
  const word = Object.keys(item)[0];
  return commonWords.includes(word)
});

const filterObject = Object.assign({}, ...filter);

console.log(filterObject);

fs.writeFileSync('./src/commonDictionary.json', JSON.stringify(filterObject));