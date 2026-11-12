const express = require('express');
const fs = require('fs');

function readStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));
      const output = [`Number of students: ${students.length}`];
      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(student[0]);
      });
      Object.keys(fields).forEach((field) => {
        output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
      resolve(output.join('\n'));
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  readStudents(process.argv[2])
    .then((text) => res.send(`This is the list of our students\n${text}`))
    .catch((error) => res.send(`This is the list of our students\n${error.message}`));
});

app.listen(1245);

module.exports = app;
