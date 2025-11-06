// Exportador simples para CSV (apenas para arrays de objetos)
const DataExporter = require("./DataExporter");

class CsvExporter extends DataExporter {
  export(data) {
    if (!Array.isArray(data)) return String(data);
    const keys = Object.keys(data[0] || {});
    const lines = data.map(row => keys.map(k => row[k]).join(","));
    return [keys.join(","), ...lines].join("\n");
  }
}

module.exports = CsvExporter;