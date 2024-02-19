//using async in place of readFileSync
//can lead to callback hell
const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, firstResult) => {
  if (err) {
    return;
  }

  const first = firstResult;

  readFile('./content/second.txt', 'utf-8', (err, secondResult) => {
    if (err) {
      return;
    }

    const second = secondResult;

    writeFile('./content/result.txt', `Here is the result: ${first}, ${second}`, (err,result) => {
      if (err) {
    
        return;
      }
      console.log('done eith this task');
    });
  });
});
console.log('starting next task');