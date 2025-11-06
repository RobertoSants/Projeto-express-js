// Estratégia de frete com valor fixo
const ShippingStrategy = require("./ShippingStrategy");

class FlatRateShipping extends ShippingStrategy {
  constructor(rate = 15.0) {
    super();
    this.rate = rate;
  }

  calculate(subtotal) {
    return this.rate;
  }
}

module.exports = FlatRateShipping;