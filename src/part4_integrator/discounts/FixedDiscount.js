// desconto em valor fixo (reais)
const DiscountStrategy = require("./DiscountStrategy");

class FixedDiscount extends DiscountStrategy {
  constructor(value) {
    super();
    this.value = value;
  }

  applyDiscount(amount) {
    const final = parseFloat(Math.max(0, amount - (this.value || 0)).toFixed(2));
    return final;
  }
}

module.exports = FixedDiscount;