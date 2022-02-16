import { Report } from "./Report";

export class ConsoleReport extends Report {
  print() {
    console.log(this.report);
  }
}