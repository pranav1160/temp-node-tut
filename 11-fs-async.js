// //using async in place of readFileSync
// //can lead to callback hell
// const { readFile, writeFile } = require('fs');

// console.log('start');

// readFile('./content/first.txt', 'utf-8', (err, firstResult) => {
//   if (err) {
//     return;
//   }

//   const first = firstResult;

//   readFile('./content/second.txt', 'utf-8', (err, secondResult) => {
//     if (err) {
//       return;
//     }

//     const second = secondResult;

//     writeFile('./content/result.txt', `Here is the result: ${first}, ${second}`, (err,result) => {
//       if (err) {
    
//         return;
//       }
//       console.log('done eith this task');
//     });
//   });
// });
// console.log('starting next task');


//practice 2
const { readFile,writeFile } = require('fs');
readFile('mytest.txt','utf-8',(err,data)=>{
  if(err){
    console.error(err);
    return;
  }
const first = data;

readFile('mytst2.txt','utf-8',(err,data)=>{
if(err){
  console.error(err);
}
const second = data;

writeFile('combine.txt',`here is the msg : ${first} ${second}`,(err)=>{
if(err){
  console.error(err)
}
console.log('done with this task')
})
})
})