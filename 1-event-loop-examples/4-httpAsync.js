const http = require('http')

const server = http.createServer((req,res)=>{
  console.log("request event");
  res.end('hello world')
})

const port = 3000;

server.listen(3000, ()=>{console.log("server is listening on port 3000.....");})
