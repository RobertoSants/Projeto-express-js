// Interface base
class DataExporter {
  export(data) {
    throw new Error("Método abstrato");
  }
}
module.exports = DataExporter;