// aplica desconto percentual
const DiscountStrategy = require("./DiscountStrategy");

class PercentageDiscount extends DiscountStrategy {
  constructor(percent) {
    super();
    this.percent = percent;
  }

  applyDiscount(amount) {
    const final = parseFloat((amount * (1 - (this.percent || 0) / 100)).toFixed(2));
    return final;
  }
}

module.exports = PercentageDiscount;