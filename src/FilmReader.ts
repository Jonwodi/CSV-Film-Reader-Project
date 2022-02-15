import { CsvReader } from './CsvReader';
import { parseDate } from './utils';
import { FilmData } from './FilmData';

export class FilmReader extends CsvReader<FilmData> {
  mapRow(col: string[]): (string | number | Date)[] {
    return [col[0], parseInt(col[1]), col[2], parseDate(col[3]), col[4]];
  }
}