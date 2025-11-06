// Aplica desconto fixo (exemplo) e cria totalAfterDiscount
const OrderHandler = require("./OrderHandler");

class DiscountApplier extends OrderHandler {
  constructor(discount = 0) {
    super();
    this.discount = discount;
  }

  handle(order) {
    // assume order.subtotal já calculado
    const subtotal = order.subtotal || 0;
    order.totalAfterDiscount = parseFloat(Math.max(0, subtotal - this.discount).toFixed(2));
    return super.handle(order);
  }
}

module.exports = DiscountApplier;