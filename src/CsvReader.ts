import fs from 'fs';

export abstract class CsvReader<T> {
  data: T[] = [];

  constructor(public filename: string) {
    this.data = this.read(filename)
  }

  abstract mapRow(row: string[]): any;

  read(filename: string): T[] {
    return fs
      .readFileSync(this.filename, {encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}