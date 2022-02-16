import { ConsoleReport } from './ConsoleReport';
import { HtmlReport } from './HtmlReport';
import { FilmCountAnalysis } from './FilmCountAnalysis';
import { FilmReader } from './FilmReader';

const reader = new FilmReader('films.csv');
const analyzer = new FilmCountAnalysis(reader.data);
const consoleReport = new ConsoleReport(analyzer.run('Mel Gibson'));
const htmlReport = new HtmlReport(analyzer.run('Mel Gibson'));

// consoleReport.print();
htmlReport.print();



