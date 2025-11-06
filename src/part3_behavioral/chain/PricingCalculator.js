// Calcula preço total do pedido
const OrderHandler = require("./OrderHandler");

class PricingCalculator extends OrderHandler {
  handle(order) {
    const total = order.products.reduce((s, p) => s + (p.price || 0), 0);
    order.total = total;
    return super.handle(order);
  }
}

module.exports = PricingCalculator;