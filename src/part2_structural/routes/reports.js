const express = require("express");
const router = express.Router();
const BaseReport = require("../decorator/BaseReport");
const TimestampDecorator = require("../decorator/TimestampDecorator");
const SignatureDecorator = require("../decorator/SignatureDecorator");
const logger = require("../../part1_creational/logger/Logger");

router.post("/", (req, res) => {
  const { author, addTimestamp } = req.body;

  let report = new BaseReport();

  // Adiciona timestamp, se solicitado
  if (addTimestamp) {
    report = new TimestampDecorator(report);
  }

  // Adiciona assinatura
  if (author) {
    report = new SignatureDecorator(report, author);
  }

  const result = report.generate();
  logger.info("Relatório gerado com sucesso");
  res.json(result);
});

module.exports = router;