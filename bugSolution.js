const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a slow operation asynchronously
  const start = Date.now();
  await new Promise(resolve => setTimeout(resolve, 10000)); // Asynchronous delay
  const end = Date.now();
  const duration = end - start;
  console.log(`Request processed in ${duration}ms`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});