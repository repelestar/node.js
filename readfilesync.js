const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./text.txt', 'utf8');
console.log(txt)
console.log("Blocked because Sync!")