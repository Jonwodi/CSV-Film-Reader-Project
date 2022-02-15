import { FilmCountAnalysis } from './FilmCountAnalysis';
import { FilmReader } from './FilmReader';

const reader = new FilmReader('films.csv');
const analyzer = new FilmCountAnalysis(reader.data);

console.log(analyzer.run('Mel Gibson'));




