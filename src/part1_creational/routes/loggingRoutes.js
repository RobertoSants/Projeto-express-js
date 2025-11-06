// Endpoint REST para o serviço de logs

const express = require("express");
const router = express.Router();
const logger = require("../singleton/LoggingService");

// Retorna os logs recentes
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || undefined;
  res.json(logger.getRecent(limit));
});

// Adiciona novo log
router.post("/", (req, res) => {
  const { level = "info", message = "" } = req.body;
  const entry = logger[level](message);
  res.status(201).json(entry);
});

module.exports = router;