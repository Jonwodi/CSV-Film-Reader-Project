"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilmReader_1 = require("./FilmReader");
const reader = new FilmReader_1.FilmReader('films.csv');
// console.log(films);
// console.log(films[0]);
// console.log(films[0][0]);
let count = 0;
let actor = 'Denzel Washington';
actor = 'Mel Gibson';
for (let film of reader.data) {
    // console.log(film[4]);
    if (film[4] === actor) {
        count++;
    }
}
console.log(`${actor} appeared in ${count} films.`);
// console.log(films);
