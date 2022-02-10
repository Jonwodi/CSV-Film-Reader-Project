import fs from 'fs';

export  class CsvReader {
  data: any[] = [];

  constructor(public filename: string) {
    this.data = this.read(filename)
  }

  read(filename: string): any[] {
    return fs
      .readFileSync(this.filename, {encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((col) => {
        return [col[0], parseInt(col[1]), col[2], this.parseDate(col[3]), col[4]]
      })
  }

    parseDate(dateString: string): Date {
      let date = dateString.split('/').map((d) => parseInt(d));
      return new Date(date[2], date[1]-1, date[0]);
  }
}