// Rota para processar pagamentos via Template Method
const express = require("express");
const router = express.Router();

const CreditCardProcessor = require("../template/CreditCardProcessor");
const PayPalProcessor = require("../template/PayPalProcessor");
const BankTransferProcessor = require("../template/BankTransferProcessor");

// POST /payproc
// body: { type: "card"|"paypal"|"bank", paymentInfo: {...} }
router.post("/", async (req, res) => {
  const { type, paymentInfo } = req.body;
  if (!type || !paymentInfo) return res.status(400).json({ error: "type e paymentInfo obrigatórios" });

  let processor;
  switch (type) {
    case "card":
      processor = new CreditCardProcessor();
      break;
    case "paypal":
      processor = new PayPalProcessor();
      break;
    case "bank":
      processor = new BankTransferProcessor();
      break;
    default:
      return res.status(400).json({ error: "Tipo inválido: card, paypal ou bank" });
  }

  const result = await processor.processPayment(paymentInfo);
  if (!result.ok) return res.status(400).json(result);
  res.json(result.result);
});

module.exports = router;