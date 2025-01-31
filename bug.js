const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a slow operation
  const start = Date.now();
  setTimeout(() => {
    const end = Date.now();
    const duration = end - start;
    console.log(`Request processed in ${duration}ms`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 10000); // Simulate a 10-second delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});