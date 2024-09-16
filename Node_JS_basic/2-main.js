const countStudents = require('./2-read_file');

// Test with a valid CSV file
countStudents('database.csv');

// Test with an invalid file to trigger the error
try {
  countStudents('nonexistent.csv');
} catch (error) {
  console.log(error.message);
}
