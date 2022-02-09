"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let films = fs_1.default.readFileSync('films.csv', { encoding: 'utf8' }).split('\n')
    .map((row) => {
    return row.split(',');
});
console.log(films);
console.log(films[0]);
console.log(films[0][0]);
let count = 0;
let actor = 'Denzel Washington';
actor = 'Mel Gibson';
for (let film of films) {
    // console.log(film[4]);
    if (film[4] === actor) {
        count++;
    }
}
console.log(`${actor} appeared in ${count} films.`);
