const express = require('express');

// Initialize the Express app
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
