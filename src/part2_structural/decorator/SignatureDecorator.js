const ReportDecorator = require("./ReportDecorator");

// Adiciona assinatura ao relatório
class SignatureDecorator extends ReportDecorator {
  constructor(report, author) {
    super(report);
    this.author = author;
  }

  generate() {
    const base = super.generate();
    return { ...base, signedBy: this.author };
  }
}

module.exports = SignatureDecorator;