const { writeFile,readFile } = require('fs').promises;



const start = async () =>{
try {
  const first = await readFile('./mytest.txt','utf-8')
  const second = await readFile('./mytst2.txt','utf-8')
  await writeFile('./combine.txt',`hey there ${first} ${second}`,{flag:'a'})
  console.log(first,second);
} catch (error) {
  console.log(error);
}
}

start()

// const getText = (path) =>{
//   return new Promise((resolve,reject)=>{
//     readFile(path,'utf-8',(err,data)=>{
//       if(err){
//         reject(err);
//       }else{
//         resolve(data);
//       }
//     })
//   })
// }

// getText('./mytst2.txt').then((result)=>{console.log(result);}).catch((err)=>{console.log(err);})