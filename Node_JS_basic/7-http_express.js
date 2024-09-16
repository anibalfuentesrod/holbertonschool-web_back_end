const express = require('express');
const countStudents = require('./3-read_file_async');

// Initialize the Express app
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  // Write initial message
  res.write('This is the list of our students\n');

  // Fetch student data from CSV file
  countStudents(databasePath)
    .then((studentData) => {
      res.write(studentData);
      res.end();
    })
    .catch((error) => {
      res.write(error.message);
      res.end();
    });
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
