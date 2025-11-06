const express = require("express");
const router = express.Router();
const PaymentService = require("../adapter/PaymentService");
const logger = require("../../part1_creational/logger/Logger");

router.post("/", (req, res) => {
  const { amount, method, customer } = req.body;

  if (!amount || !method || !customer) {
    return res.status(400).json({ error: "Campos obrigatórios: amount, method, customer" });
  }

  const paymentService = new PaymentService();
  const result = paymentService.process(amount, method, customer);

  logger.info(`Pagamento processado com sucesso via ${method}`);
  res.json(result);
});

module.exports = router;