const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split file content by lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if the file has any lines (besides the header)
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    // Remove the first line (header)
    const students = lines.slice(1);

    // Initialize variables for counting
    const totalStudents = students.length;
    const fields = {};

    students.forEach((line) => {
      // Destructure only the first name and field (omit lastname and age)
      const [firstname, , , field] = line.split(',');

      if (!Object.prototype.hasOwnProperty.call(fields, field)) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Output the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Output the count and list of students by field
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const studentsInField = fields[field];
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
      }
    }
  } catch (error) {
    // Handle errors when the file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
