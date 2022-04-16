const { readFile, readFileSync } = require('fs');

readFile('./text.txt', 'utf8', (err, txt) => {
	console.log(txt)
});

console.log("Not Blocked!")