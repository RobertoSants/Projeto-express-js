// API para aplicar diferentes estratégias de desconto
const express = require("express");
const router = express.Router();

const PercentageDiscount = require("../strategy/PercentageDiscount");
const FixedDiscount = require("../strategy/FixedDiscount");
const BuyXGetYDiscount = require("../strategy/BuyXGetYDiscount");
const PriceCalculator = require("../strategy/PriceCalculator");

// POST /discounts
// body: { type: "percent"|"fixed"|"buyxgety", amount: number, value: number (percent or fixed) }
router.post("/", (req, res) => {
  const { type, amount, value } = req.body;
  if (typeof amount !== "number") return res.status(400).json({ error: "Campo 'amount' numérico obrigatório" });

  let strategy;
  switch (type) {
    case "percent":
      strategy = new PercentageDiscount(value || 0);
      break;
    case "fixed":
      strategy = new FixedDiscount(value || 0);
      break;
    case "buyxgety":
      // aqui usamos x=3, y=1 por padrão, poderia receber via body
      strategy = new BuyXGetYDiscount(3, 1);
      break;
    default:
      return res.status(400).json({ error: "Tipo inválido. Use percent, fixed ou buyxgety" });
  }

  const calc = new PriceCalculator(strategy);
  const final = calc.calculate(amount);
  res.json({ original: amount, final });
});

module.exports = router;