// Endpoint REST para processar pagamentos
const express = require("express");
const router = express.Router();
const LegacyPaymentAdapter = require("../LegacyPaymentAdapter");
const logger = require("../../../part1_creational/singleton/LoggingService");

router.post("/", (req, res) => {
  const { orderId, amount } = req.body;
  const adapter = new LegacyPaymentAdapter();
  const result = adapter.processPayment(orderId, amount);
  logger.info(`Pagamento processado: ${JSON.stringify(result)}`);
  res.json(result);
});

module.exports = router;