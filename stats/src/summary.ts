import { OutputTarget, Analyzer } from './interfaces';
import { MatchData } from './types';
import { WinsAnalysis } from './analyzers/wins-analysis';
import { HtmlReport } from './reportTargets/html-report';

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarger: OutputTarget) {}

  static printSummary(team: string, matches: MatchData[]): Summary {
    const summary = new Summary(new WinsAnalysis(team), new HtmlReport());
    summary.buildAndPrintReport(matches);
    return summary;
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarger.print(output);
  }
}
