import fs from 'fs';

export class CsvFileReader {
  public data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    console.log(this.filename);
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
