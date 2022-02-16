export abstract class Report {
  constructor(public report: string) {
    this.report = report;
  }

  abstract print(): void;
}