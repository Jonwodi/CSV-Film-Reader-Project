import fs from 'fs';

let films = fs.readFileSync('films.csv', {encoding: 'utf8' }
).split('\n')
.map((row) => {
  return row.split(',');
});

console.log(films);
console.log(films[0]);
console.log(films[0][0]);
