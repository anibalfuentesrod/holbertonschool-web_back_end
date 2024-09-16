const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Create the HTTP server
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set response headers for plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle the root path "/"
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') { // Else block on the same line as the closing brace
    // Respond with the student data
    res.write('This is the list of our students\n');

    // Get the database path from the command-line arguments
    const databasePath = process.argv[2];

    // Call the countStudents function and append the output
    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else { // Else block on the same line as the closing brace
    res.end('404 Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the server app
module.exports = app;
