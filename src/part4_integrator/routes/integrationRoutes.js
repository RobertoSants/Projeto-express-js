// rota que usa o ExternalFacade para demonstrar integração externa
const express = require("express");
const router = express.Router();
const ExternalFacade = require("../integration/ExternalFacade");
const logger = require("../../part1_creational/singleton/LoggingService");

const facade = new ExternalFacade();

// POST /integration/external-order
// body: { amount: number, customer: { name: "..."} }
router.post("/external-order", (req, res) => {
  const { amount, customer } = req.body;
  if (typeof amount !== "number" || !customer) return res.status(400).json({ error: "amount e customer são obrigatórios" });

  const result = facade.placeExternalOrder(amount, customer);
  logger.info(`ExternalFacade: pagamento externo realizado id=${result.externalTransactionId}`);
  res.json(result);
});

module.exports = router;