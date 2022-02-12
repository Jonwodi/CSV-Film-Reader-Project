import { CsvReader } from './CsvReader';
import { parseDate } from './utils';

export class FilmReader extends CsvReader {
  mapRow(col: string[]) {
    return [col[0], parseInt(col[1]), col[2], parseDate(col[3]), col[4]];
  }
}