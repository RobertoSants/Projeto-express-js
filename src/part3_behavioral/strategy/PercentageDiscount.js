// Desconto percentual
const DiscountStrategy = require("./DiscountStrategy");

class PercentageDiscount extends DiscountStrategy {
  constructor(percent) {
    super();
    this.percent = percent;
  }

  applyDiscount(amount) {
    // Subtrai percentual do valor
    return parseFloat((amount * (1 - this.percent / 100)).toFixed(2));
  }
}

module.exports = PercentageDiscount;