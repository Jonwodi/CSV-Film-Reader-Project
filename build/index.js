"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilmCountAnalysis_1 = require("./FilmCountAnalysis");
const FilmReader_1 = require("./FilmReader");
const reader = new FilmReader_1.FilmReader('films.csv');
const analyzer = new FilmCountAnalysis_1.FilmCountAnalysis(reader.data);
console.log(analyzer.run('Mel Gibson'));
