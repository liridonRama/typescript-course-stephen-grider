import { dateStringToDate } from '../utils';
import { MatchResult } from '../enums';
import { MatchData } from '../types';
import { CsvFileReader } from './csv-file-reader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    const matchReader = new MatchReader(new CsvFileReader(filename));
    matchReader.load();
    return matchReader;
  }
  public matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => this.mapRow(row)
    );
  }

  private mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}
