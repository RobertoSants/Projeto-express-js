// base para decoradores de desconto
// Permite combinar descontos dinamicamente
const DiscountStrategy = require("./DiscountStrategy");

class DiscountDecorator extends DiscountStrategy {
  constructor(strategy) {
    super();
    this.strategy = strategy; // estratégia a ser decorada
  }

  applyDiscount(amount) {
    // Por padrão delega para a estratégia interna
    return this.strategy.applyDiscount(amount);
  }
}

module.exports = DiscountDecorator;