const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // Reject the promise if there's an error reading the file
        reject(new Error('Cannot load the database'));
      } else {
        // Split file content by lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Check if there are any student records
        if (lines.length < 2) {
          reject(new Error('Cannot load the database'));
        }

        // Remove the first line (header)
        const students = lines.slice(1);

        // Initialize variables for counting
        const totalStudents = students.length;
        const fields = {};

        students.forEach((line) => {
          const [firstname, , , field] = line.split(',');

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        // Create the response string
        let response = `Number of students: ${totalStudents}\n`;

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const studentsInField = fields[field];
            response += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`;
          }
        }

        // Resolve with the response string
        resolve(response.trim());
      }
    });
  });
}

module.exports = countStudents;
