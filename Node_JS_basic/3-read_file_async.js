const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // reject the promise if there is an error reading the file
        reject(new Error('Cannot load the database'));
      } else {
        // split file content by lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // check if there are any student records
        if (lines.length < 2) {
          reject(new Error('Cannot load the database'));
        }

        // remove the first line
        const students = lines.slice(1);

        // init var for counting
        const totalStudents = students.length;
        const fields = {};

        students.forEach((line) => {
          const [firstname, , , field] = line.split(',');

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        // output the total number of students
        console.log(`Number of students: ${totalStudents}`);

        // output the count and list of students by field
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const studentsInField = fields[field];
            console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
          }
        }

        // resolve the promise
        resolve();
      }
    });
  });
}

module.exports = countStudents;
