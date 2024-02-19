const {readFileSync ,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result.txt',`bleach tutorial ${first},${second}`,{ flag :'a' })//flag is used to append a file

// console.log(first);
// console.log(second);

console.log('done with this task');
console.log('starting the next one');