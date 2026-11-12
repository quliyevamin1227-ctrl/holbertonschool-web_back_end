import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fields = {};
      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });
      resolve(fields);
    });
  });
}
