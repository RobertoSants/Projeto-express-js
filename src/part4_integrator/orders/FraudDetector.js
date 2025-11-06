// Detector simples de fraude por valor total
const OrderHandler = require("./OrderHandler");

class FraudDetector extends OrderHandler {
  handle(order) {
    const total = order.items.reduce((s, i) => s + (i.price || 0), 0);
    if (total > 50000) return { ok: false, error: "Pedido suspeito: valor muito alto" };
    return super.handle(order);
  }
}

module.exports = FraudDetector;