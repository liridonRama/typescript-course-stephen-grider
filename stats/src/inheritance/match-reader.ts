import { dateStringToDate } from '../utils';
import { MatchResult } from '../enums';
import { MatchData } from '../types';
import { CsvFileReader } from './csv-file-reader';

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(public filename: string) {
    super(filename);
  }

  mapRow(row: string[]): MatchData {
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
