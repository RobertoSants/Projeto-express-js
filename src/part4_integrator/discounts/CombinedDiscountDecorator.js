// Combina múltiplas estratégias sequencialmente
// Aplica a primeira estratégia, depois passa o resultado para a próxima, etc.
const DiscountDecorator = require("./DiscountDecorator");

class CombinedDiscountDecorator extends DiscountDecorator {
  constructor(strategy) {
    super(strategy);
    this.additional = []; // lista de estratégias adicionais
  }

  addStrategy(strategy) {
    this.additional.push(strategy);
  }

  applyDiscount(amount) {
    // aplica a estratégia base
    let result = super.applyDiscount(amount);

    // aplica estratégias adicionais em sequência
    for (const s of this.additional) {
      result = s.applyDiscount(result);
    }
    return result;
  }
}

module.exports = CombinedDiscountDecorator;