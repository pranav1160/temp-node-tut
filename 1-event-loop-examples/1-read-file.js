const fs = require('fs');

console.log("task started");

fs.readFile('mytest.txt','utf-8',(err,data)=>{
if(err){
  console.error(err);
}
console.log(data)
})

console.log("task finished");