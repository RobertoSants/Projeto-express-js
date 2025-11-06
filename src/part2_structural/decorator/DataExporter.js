// Interface base para exportadores de dados
class DataExporter {
  export(data) {
    throw new Error("export deve ser implementado");
  }
}

module.exports = DataExporter;