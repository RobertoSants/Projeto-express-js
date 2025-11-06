// Desconto de valor fixo (ex: -10 reais)
const DiscountStrategy = require("./DiscountStrategy");

class FixedDiscount extends DiscountStrategy {
  constructor(value) {
    super();
    this.value = value;
  }

  applyDiscount(amount) {
    return parseFloat(Math.max(0, amount - this.value).toFixed(2));
  }
}

module.exports = FixedDiscount;