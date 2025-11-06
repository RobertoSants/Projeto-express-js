// Rota que cria a cadeia de processamento e usa o Template Method para pagamento
const express = require("express");
const router = express.Router();

const InventoryValidator = require("../orders/InventoryValidator");
const FraudDetector = require("../orders/FraudDetector");
const PricingCalculator = require("../orders/PricingCalculator");
const DiscountApplier = require("../orders/DiscountApplier");
const OrderPersister = require("../orders/OrderPersister");

const CreditCardPayment = require("../orders/CreditCardPayment");
const PayPalPayment = require("../orders/PayPalPayment");

const logger = require("../../part1_creational/singleton/LoggingService");

// POST /orders/process
// body: { items: [{ id, price, stock }], discount: number, payment: { type, data }, customer: {...} }
router.post("/process", async (req, res) => {
  const { items = [], discount = 0, payment = {}, customer } = req.body;

  if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: "items obrigatórios" });

  const order = { items, customer };

  // monta cadeia: inventory -> fraud -> pricing -> discount -> persister
  const inventory = new InventoryValidator();
  const fraud = new FraudDetector();
  const pricing = new PricingCalculator();
  const discountHandler = new DiscountApplier(discount);
  const persister = new OrderPersister();

  inventory.setNext(fraud).setNext(pricing).setNext(discountHandler).setNext(persister);

  const chainResult = inventory.handle(order);
  if (!chainResult.ok) return res.status(400).json(chainResult);

  // processo de pagamento via Template Method
  let processor;
  if (payment.type === "paypal") processor = new PayPalPayment();
  else processor = new CreditCardPayment();

  const payResult = await processor.processPayment({
    ...payment.data,
    amount: chainResult.order.totalAfterDiscount || chainResult.order.subtotal
  });

  if (!payResult.ok) return res.status(400).json(payResult);

  logger.info(`Pedido processado id=${chainResult.order.id} tx=${payResult.result.transactionId}`);
  res.status(201).json({ order: chainResult.order, payment: payResult.result });
});

module.exports = router;