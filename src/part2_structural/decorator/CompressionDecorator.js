// Simula compressão (base64) sobre a saída do exportador
const DataExporterDecorator = require("./DataExporterDecorator");

class CompressionDecorator extends DataExporterDecorator {
  export(data) {
    const original = super.export(data);
    // Em vez de compressão real, codificamos em base64 para demonstração
    return Buffer.from(String(original)).toString("base64");
  }
}

module.exports = CompressionDecorator;