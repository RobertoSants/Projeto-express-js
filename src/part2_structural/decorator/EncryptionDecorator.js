// Simula "criptografia" (inverte string) para demonstração
const DataExporterDecorator = require("./DataExporterDecorator");

class EncryptionDecorator extends DataExporterDecorator {
  export(data) {
    const original = super.export(data);
    return String(original).split("").reverse().join(""); // forma simples de "mascarar"
  }
}

module.exports = EncryptionDecorator;