import fs from 'fs';
import { parseDate } from './utils';

export abstract class CsvReader {
  data: any[] = [];

  constructor(public filename: string) {
    this.data = this.read(filename)
  }

  abstract mapRow(row: string[]): any;

  read(filename: string): any[] {
    return fs
      .readFileSync(this.filename, {encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}