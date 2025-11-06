// Detecta possíveis fraudes
const OrderHandler = require("./OrderHandler");

class FraudDetector extends OrderHandler {
  handle(order) {
    // Simulação de regra simples: pedido com total > 10000 é suspeito
    const total = order.products.reduce((s, p) => s + (p.price || 0), 0);
    if (total > 10000) {
      return { ok: false, error: "Pedido suspeito de fraude (valor muito alto)" };
    }
    return super.handle(order);
  }
}

module.exports = FraudDetector;