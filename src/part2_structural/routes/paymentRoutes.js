// Rota para processar pagamento usando o adapter
const express = require("express");
const router = express.Router();
const LegacyPaymentAdapter = require("../adapter/LegacyPaymentAdapter");
const logger = require("../../part1_creational/singleton/LoggingService");

// POST /payments
// body: { orderId: "ORD001", amount: 123.45 }
router.post("/", (req, res) => {
  const { orderId, amount } = req.body;
  if (!orderId || typeof amount !== "number") {
    return res.status(400).json({ error: "Campos inválidos: orderId e amount (number) são obrigatórios" });
  }

  const adapter = new LegacyPaymentAdapter();
  const result = adapter.processPayment(orderId, amount);

  logger.info(`Pagamento via Adapter processado: ${JSON.stringify(result)}`);
  res.json(result);
});

module.exports = router;