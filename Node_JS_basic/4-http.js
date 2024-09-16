// http server
const http = require('http');

// creates te http server
const app = http.createServer((req, res) => {
  // set the respose header to indicate plain text
  res.setHeader('Content-Type', 'text/plain');

  // respond with give str for any request
  res.end('Hello Holberton School!');
});

// listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// export the server app
module.exports = app;
