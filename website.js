const fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
 
  console.log(req.url)
  if(req.url=='/'){
    res.statusCode = 200;
    res.end('Hello World');
  }
  else if(req.url=='/hello'){
    res.statusCode = 200;
    const data = fs.readFileSync('hello.html')
    res.end(data.toString());
  }
  else if(req.url=='/about'){
    res.statusCode = 200;
    const data = fs.readFileSync('about.html')
    res.end(data.toString());
  }
  else if(req.url=='/main'){
    res.statusCode = 200;
    const data = fs.readFileSync('main.html')
    res.end(data.toString());
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});