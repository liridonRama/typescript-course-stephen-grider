import { MatchReader } from './interface/match-reader';
import { Summary } from './summary';

const matchReader = MatchReader.fromCsv('football.csv');
Summary.printSummary('Man United', matchReader.matches);
