// Adiciona compression simples
const DataExporterDecorator = require("./DataExporterDecorator");
class CompressionDecorator extends DataExporterDecorator {
  export(data) {
    const original = this.exporter.export(data);
    return Buffer.from(original).toString("base64"); // Simula compressão
  }
}
module.exports = CompressionDecorator;