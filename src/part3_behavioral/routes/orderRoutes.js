// Rota para submeter pedidos e executar a cadeia de handlers
const express = require("express");
const router = express.Router();

const InventoryValidator = require("../chain/InventoryValidator");
const FraudDetector = require("../chain/FraudDetector");
const PricingCalculator = require("../chain/PricingCalculator");
const DiscountApplier = require("../chain/DiscountApplier");
const OrderPersister = require("../chain/OrderPersister");

// POST /orders
// body: { products: [{ id, price }], discount: number }
router.post("/", (req, res) => {
  const { products = [], discount = 0 } = req.body;
  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ error: "Produtos são obrigatórios" });
  }

  const order = { products };

  // monta a cadeia de responsabilidade
  const inventory = new InventoryValidator();
  const fraud = new FraudDetector();
  const pricing = new PricingCalculator();
  const discountHandler = new DiscountApplier(discount);
  const persister = new OrderPersister();

  // encadeia: inventory -> fraud -> pricing -> discount -> persister
  inventory.setNext(fraud).setNext(pricing).setNext(discountHandler).setNext(persister);

  const result = inventory.handle(order);

  if (!result.ok) {
    return res.status(400).json(result);
  }

  res.status(201).json(result.order);
});

module.exports = router;