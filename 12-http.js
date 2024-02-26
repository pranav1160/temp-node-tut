// const http = require('http');

// const server = http.createServer((request, respond) => {
//   if (request.url === '/') {
//     respond.end('Welcome to the home page');
//   } else if (request.url === '/about') {
//     respond.end('Here is our short history');
//   } else {
//     respond.end(`
//       <h1>Oops!</h1>
//       <p>We can't seem to find what you're looking for</p>
//       <a href="/">Back home</a>
//     `);
//   }
// });

// server.listen(5000, () => {
//   console.log('Server is listening on port 5000');
// });


const http = require('http');

const server = http.createServer((request,respond)=>{
  if(request.url=='/'){
    respond.end('welcome to home page')
  }else if(request.url=='/about'){
    respond.end('here is our short history')
  }else{respond.end(
    '<h1>oops we cant find what u r looking for</h1>'
  );
  }
})

const port = 5000;

server.listen(port,()=>{
  console.log("server is working");
})