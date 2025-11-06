const ReportDecorator = require("./ReportDecorator");

// Adiciona timestamp ao relatório
class TimestampDecorator extends ReportDecorator {
  generate() {
    const base = super.generate();
    return { ...base, timestamp: new Date().toISOString() };
  }
}

module.exports = TimestampDecorator;