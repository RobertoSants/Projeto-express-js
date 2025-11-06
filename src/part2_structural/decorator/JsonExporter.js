// Exporta para JSON
const DataExporter = require("./DataExporter");
class JsonExporter extends DataExporter {
  export(data) {
    return JSON.stringify(data, null, 2);
  }
}
module.exports = JsonExporter;