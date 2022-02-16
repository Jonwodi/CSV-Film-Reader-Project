"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
const Report_1 = require("./Report");
class ConsoleReport extends Report_1.Report {
    print() {
        console.log(this.report);
    }
}
exports.ConsoleReport = ConsoleReport;
