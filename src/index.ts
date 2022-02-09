import fs from 'fs';

let films = fs.readFileSync('films.csv', {encoding: 'utf8' }
).split('\n')
.map((row: string): string[] => {
  return row.split(',');
});

console.log(films);
console.log(films[0]);
console.log(films[0][0]);

let count: number = 0;
let actor: string = 'Denzel Washington';
actor = 'Mel Gibson';

for (let film of films) {
  // console.log(film[4]);
  if (film[4] === actor) {
    count++;
  }
}
console.log(`${actor} appeared in ${count} films.`)
