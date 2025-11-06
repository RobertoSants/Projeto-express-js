const express = require("express");
const router = express.Router();
const logger = require("../logger/Logger");

// Retorna os logs recentes
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || undefined;
  res.json(logger.getRecent(limit));
});

// Cria um novo log (info, warn ou error)
router.post("/", (req, res) => {
  const { level = "info", message = "" } = req.body;
  const entry = logger[level](message); // Usa o método correspondente ao nível informado
  res.status(201).json(entry);
});

module.exports = router;