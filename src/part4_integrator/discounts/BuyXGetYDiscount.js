// Simplificação do padrão "compre X leve Y"
// Para este exemplo, reduz o preço proporcionalmente considerando y grátis
const DiscountStrategy = require("./DiscountStrategy");

class BuyXGetYDiscount extends DiscountStrategy {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  applyDiscount(amount) {
    // Interpretação: desconto percentual = (y/x) * 100
    const percent = (this.y / this.x) * 100;
    const final = parseFloat((amount * (1 - percent / 100)).toFixed(2));
    return final;
  }
}

module.exports = BuyXGetYDiscount;