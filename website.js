const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
 
  console.log(req.url)
  if(req.url=='/'){
    res.statusCode = 200;
    res.end('Hello World');
  }
  else if(req.url=='/about'){
    res.statusCode = 200;
    res.end('Hello World about');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});