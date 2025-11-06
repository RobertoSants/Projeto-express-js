// Classe base para decorator
const DataExporter = require("./DataExporter");
class DataExporterDecorator extends DataExporter {
  constructor(exporter) {
    super();
    this.exporter = exporter;
  }
}
module.exports = DataExporterDecorator;