const express = require("express");
const router = express.Router();
const JsonExporter = require("../JsonExporter");
const CompressionDecorator = require("../CompressionDecorator");
const logger = require("../../../part1_creational/singleton/LoggingService");

router.post("/", (req, res) => {
  const { data, compressed } = req.body;
  let exporter = new JsonExporter();

  if (compressed) {
    exporter = new CompressionDecorator(exporter);
  }

  const output = exporter.export(data);
  logger.info("Dados exportados com sucesso");
  res.json({ output });
});

module.exports = router;