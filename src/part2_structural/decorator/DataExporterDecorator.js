// Base para decorator de exportador
const DataExporter = require("./DataExporter");

class DataExporterDecorator extends DataExporter {
  constructor(exporter) {
    super();
    this.exporter = exporter; // componente que será decorado
  }

  export(data) {
    return this.exporter.export(data); // delega por padrão
  }
}

module.exports = DataExporterDecorator;