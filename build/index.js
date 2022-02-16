"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleReport_1 = require("./ConsoleReport");
const FilmCountAnalysis_1 = require("./FilmCountAnalysis");
const FilmReader_1 = require("./FilmReader");
const reader = new FilmReader_1.FilmReader('films.csv');
const analyzer = new FilmCountAnalysis_1.FilmCountAnalysis(reader.data);
const consoleReport = new ConsoleReport_1.ConsoleReport(analyzer.run('Mel Gibson'));
consoleReport.print();
