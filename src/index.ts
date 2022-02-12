import fs from 'fs';
import { FilmReader } from './FilmReader'

const reader = new FilmReader('films.csv')


// console.log(films);
// console.log(films[0]);
// console.log(films[0][0]);

let count: number = 0;
let actor: string = 'Denzel Washington';
actor = 'Mel Gibson';

for (let film of reader.data) {
  // console.log(film[4]);
  if (film[4] === actor) {
    count++;
  }
}



console.log(`${actor} appeared in ${count} films.`)
// console.log(films);
