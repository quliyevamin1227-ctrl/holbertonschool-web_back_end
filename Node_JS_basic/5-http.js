const http = require('http');
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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    readStudents(process.argv[2])
      .then((text) => res.end(`This is the list of our students\n${text}`))
      .catch((error) => res.end(`This is the list of our students\n${error.message}`));
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
