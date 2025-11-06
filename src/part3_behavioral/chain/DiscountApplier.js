// Aplica desconto (simples) se existir
const OrderHandler = require("./OrderHandler");

class DiscountApplier extends OrderHandler {
  constructor(discount = 0) {
    super();
    this.discount = discount; // valor fixo em reais a subtrair
  }

  handle(order) {
    order.totalAfterDiscount = parseFloat(Math.max(0, (order.total || 0) - this.discount).toFixed(2));
    return super.handle(order);
  }
}

module.exports = DiscountApplier;