// Rota para exportar dados com decoradores opcionais
const express = require("express");
const router = express.Router();

const JsonExporter = require("../decorator/JsonExporter");
const CsvExporter = require("../decorator/CsvExporter");
const XmlExporter = require("../decorator/XmlExporter");
const CompressionDecorator = require("../decorator/CompressionDecorator");
const EncryptionDecorator = require("../decorator/EncryptionDecorator");
const logger = require("../../part1_creational/singleton/LoggingService");

// POST /exports
// body: { data: <any>, format: "json"|"csv"|"xml", compressed: boolean, encrypted: boolean }
router.post("/", (req, res) => {
  const { data, format = "json", compressed = false, encrypted = false } = req.body;

  // escolha do exportador base
  let exporter;
  switch (format) {
    case "csv": exporter = new CsvExporter(); break;
    case "xml": exporter = new XmlExporter(); break;
    default: exporter = new JsonExporter(); break;
  }

  // aplica decoradores conforme solicitado
  if (compressed) exporter = new CompressionDecorator(exporter);
  if (encrypted) exporter = new EncryptionDecorator(exporter);

  const output = exporter.export(data);
  logger.info(`Exportação realizada (format=${format}, compressed=${compressed}, encrypted=${encrypted})`);
  res.json({ output });
});

module.exports = router;