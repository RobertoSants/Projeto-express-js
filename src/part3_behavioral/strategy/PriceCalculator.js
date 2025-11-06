// Recebe uma estratégia e calcula o preço final
class PriceCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.applyDiscount(amount);
  }
}

module.exports = PriceCalculator;