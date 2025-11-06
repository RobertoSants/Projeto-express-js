// Calcula subtotal do pedido e anexa no objeto order
const OrderHandler = require("./OrderHandler");

class PricingCalculator extends OrderHandler {
  handle(order) {
    order.subtotal = order.items.reduce((s, i) => s + (i.price || 0), 0);
    return super.handle(order);
  }
}

module.exports = PricingCalculator;