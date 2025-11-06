// Rota de API para aplicar estratégias e decorators de desconto
const express = require("express");
const router = express.Router();

const PercentageDiscount = require("../discounts/PercentageDiscount");
const FixedDiscount = require("../discounts/FixedDiscount");
const BuyXGetYDiscount = require("../discounts/BuyXGetYDiscount");
const CombinedDiscountDecorator = require("../discounts/CombinedDiscountDecorator");

// POST /discounts/apply
// body: { amount: number, strategies: [{ type:"percent"|"fixed"|"buyxgety", value: number }], combine: boolean }
router.post("/apply", (req, res) => {
  const { amount, strategies = [], combine = false } = req.body;
  if (typeof amount !== "number") return res.status(400).json({ error: "amount numérico obrigatório" });

  // se não combinar (combine=false) aplicamos apenas a primeira
  if (!combine) {
    const s = strategies[0];
    if (!s) return res.json({ original: amount, final: amount });

    let strat;
    switch (s.type) {
      case "percent": strat = new PercentageDiscount(s.value); break;
      case "fixed": strat = new FixedDiscount(s.value); break;
      case "buyxgety": strat = new BuyXGetYDiscount(s.x || 3, s.y || 1); break;
      default: return res.status(400).json({ error: "tipo inválido" });
    }

    const final = strat.applyDiscount(amount);
    return res.json({ original: amount, final });
  }

  // combine=true => cria CombinedDiscountDecorator
  // base strategy (first) + adicionais
  const first = strategies[0];
  let base;
  switch (first.type) {
    case "percent": base = new PercentageDiscount(first.value); break;
    case "fixed": base = new FixedDiscount(first.value); break;
    case "buyxgety": base = new BuyXGetYDiscount(first.x || 3, first.y || 1); break;
    default: base = new PercentageDiscount(0);
  }

  const combined = new CombinedDiscountDecorator(base);
  for (let i = 1; i < strategies.length; i++) {
    const s = strategies[i];
    let strat;
    switch (s.type) {
      case "percent": strat = new PercentageDiscount(s.value); break;
      case "fixed": strat = new FixedDiscount(s.value); break;
      case "buyxgety": strat = new BuyXGetYDiscount(s.x || 3, s.y || 1); break;
      default: continue;
    }
    combined.addStrategy(strat);
  }

  const final = combined.applyDiscount(amount);
  res.json({ original: amount, final });
});

module.exports = router;