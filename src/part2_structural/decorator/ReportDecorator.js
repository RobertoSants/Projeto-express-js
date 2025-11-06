// Classe abstrata que vai definir a estrutura de um decorator
class ReportDecorator {
  constructor(report) {
    this.report = report;
  }

  generate() {
    return this.report.generate();
  }
}

module.exports = ReportDecorator;