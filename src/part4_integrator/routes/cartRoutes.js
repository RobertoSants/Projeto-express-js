// Rota que cria carrinho (bundle) e calcula frete via Strategy
const express = require("express");
const router = express.Router();
const ProductItem = require("../cart/ProductItem");
const BundleItem = require("../cart/BundleItem");
const FlatRateShipping = require("../cart/FlatRateShipping");
const FreeShipping = require("../cart/FreeShipping");
const DistanceShipping = require("../cart/DistanceShipping");

// POST /cart/checkout
// body: { items: [{ id, name, price }], shippingType: "flat"|"free"|"distance" }
router.post("/checkout", (req, res) => {
  const { items = [], shippingType = "flat" } = req.body;
  const bundle = new BundleItem("CartRoot");

  items.forEach(i => bundle.add(new ProductItem(i.id, i.name, i.price)));

  const subtotal = bundle.getPrice();
  let strategy;
  switch (shippingType) {
    case "free": strategy = new FreeShipping(); break;
    case "distance": strategy = new DistanceShipping(); break;
    default: strategy = new FlatRateShipping();
  }

  const shippingCost = strategy.calculate(subtotal);
  const total = parseFloat((subtotal + shippingCost).toFixed(2));
  res.json({ subtotal, shippingCost, total });
});

module.exports = router;