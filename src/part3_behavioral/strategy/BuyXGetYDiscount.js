// Exemplo simples: compre X leve Y (representado como desconto percentual equivalente)
// Para simplificar, considera que a "promoção" reduz preço proporcionalmente.
const DiscountStrategy = require("./DiscountStrategy");

class BuyXGetYDiscount extends DiscountStrategy {
  constructor(x, y) {
    super();
    this.x = x; // compre X
    this.y = y; // leve Y (gratuito)
  }

  applyDiscount(amount) {
    // Simplificação: se y < x, calcula desconto percentual equivalente (y/x) * 100%
    const discountPercent = (this.y / this.x) * 100;
    return parseFloat((amount * (1 - discountPercent / 100)).toFixed(2));
  }
}

module.exports = BuyXGetYDiscount;